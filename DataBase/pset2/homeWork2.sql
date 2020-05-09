-- 1. +Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
use bank;
SELECT * FROM client
WHERE CHAR_LENGTH(FirstName) < 6;

-- 2. +Вибрати львівські відділення банку.+
SELECT *
FROM department
WHERE DepartmentCity='Lviv';

-- 3. +Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
SELECT *
FROM client
WHERE Education='high'
ORDER BY LastName;

-- 4. +Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.
SELECT * FROM (
                  SELECT * FROM application ORDER BY idApplication asc LIMIT 5
              ) as r ORDER BY idApplication desc;

-- 5. +Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.
SELECT *
FROM client
WHERE LastName LIKE '%OV' OR LastName LIKE '%OVA';

-- 6. +Вивести клієнтів банку, які обслуговуються київськими відділеннями.
SELECT client.*, d.DepartmentCity
FROM client
JOIN department d on client.Department_idDepartment = d.idDepartment
WHERE DepartmentCity='KYIV';

-- 7. +Вивести імена клієнтів та їхні номера телефону, погрупувавши їх за іменами.
SELECT FirstName,Passport
FROM client
GROUP BY FirstName;


-- 8. +Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.
SELECT client.*, a.Sum
FROM client
JOIN application a on client.idClient = a.Client_idClient
WHERE Sum>5000;


-- 9. +Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
SELECT COUNT(idClient) AS LvivClient
FROM client
JOIN department d on client.Department_idDepartment = d.idDepartment;

SELECT COUNT(idClient) AS AllClient
FROM client
JOIN department d on client.Department_idDepartment = d.idDepartment
WHERE DepartmentCity='LVIV';

-- 10. Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.
SELECT MAX(Sum),FirstName,LastName,idClient
FROM client
JOIN application a on client.idClient = a.Client_idClient
GROUP BY idClient;

-- 11. Визначити кількість заявок на крдеит для кожного клієнта.
SELECT COUNT(idApplication) AS NumCredit,FirstName, LastName,idClient
FROM client
JOIN APPLICATION A ON CLIENT.idClient = A.Client_idClient
GROUP BY idClient;

-- 12. Визначити найбільший та найменший кредити.
SELECT MAX(Sum), MIN(Sum)
FROM application;

-- 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.
SELECT COUNT(idApplication) AS NumCredit,FirstName, LastName,idClient
FROM application
JOIN client c on application.Client_idClient = c.idClient
WHERE Education='high'
GROUP BY idClient;

-- 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.
SELECT Max_avg_client.*
from (
    select avg(Sum) as avg_credit, c.*
    from application
    join client c on application.Client_idClient = c.idClient
    group by idClient
    order by avg_credit desc
         )as Max_avg_client
limit 1;


-- 15. Вивести відділення, яке видало в кредити найбільше грошей
select sum(Sum) as sumOfCredit, DepartmentCity
from application
join client c on application.Client_idClient = c.idClient
join department d on c.Department_idDepartment = d.idDepartment
group by DepartmentCity
order by sumOfCredit desc
limit 1;

-- 16. Вивести відділення, яке видало найбільший кредит.
select max(sum) as maxCredit,DepartmentCity
from application
join client c on application.Client_idClient = c.idClient
join department d on c.Department_idDepartment = d.idDepartment
group by idDepartment
order by maxCredit desc
limit 1

-- 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
update application
join client c on application.Client_idClient = c.idClient
set Sum=6000
where Education = 'high';


select Sum, Education, FirstName,LastName
from client
join application a on client.idClient = a.Client_idClient
where Education='high'

-- 18. Усіх клієнтів київських відділень пересилити до Києва.
update client
    join department d on client.Department_idDepartment = d.idDepartment
    set City='Kyiv'
where DepartmentCity='Kyiv';

-- 19. Видалити усі кредити, які є повернені.
delete from application where CreditState='Returned';



-- 20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.
delete  a
from application a
join client c on a.Client_idClient = c.idClient
where substr(c.LastName,2,1) in ('a', 'e', 'i', 'o', 'u', 'y');


-- Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000

select d.idDepartment, d.DepartmentCity, sum(a.Sum)
from client c, department d, application a
where d.idDepartment = c.Department_idDepartment
and c.idClient = a.Client_idClient
and d.DepartmentCity= 'Lviv'
group by d.idDepartment, d.DepartmentCity having sum(a.Sum) > 5000;


-- Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000
select c.*,sum(a.Sum)
from client c, application a
where c.idClient = a.Client_idClient
and a.CreditState='Returned'
group by idClient, a.Client_idClient having sum(a.Sum) > 5000;


/* Знайти максимальний неповернений кредит.*/
select max(Sum),CreditState
from application
where CreditState='Not returned';



/*Знайти клієнта, сума кредиту якого найменша*/
select c.FirstName,c.LastName, a.Sum
from application a, client c
where a.Client_idClient = c.idClient
and a.Sum = (select min(Sum) from application);


/*Знайти кредити, сума яких більша за середнє значення усіх кредитів*/
select a.*
from application a
where a.Sum > (
    select avg(Sum)from application
    );

/*Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів*/
select distinct c.idClient, c.FirstName,c.LastName, c.City
from client c, application a
where c.idClient = a.Client_idClient
and c.City like (
    select c.City
    from client c, application a
    where c.idClient = a.Client_idClient
    group by c.idClient
    order by count(a.idApplication) desc
    limit 1
    );

#місто чувака який набрав найбільше кредитів
select c.City, count(a.idApplication)
from client c, application a
where c.idClient = a.Client_idClient
group by c.idClient
order by count(a.idApplication) desc
limit 1;


set sql_safe_updates = 0;
set sql_safe_updates = 1;