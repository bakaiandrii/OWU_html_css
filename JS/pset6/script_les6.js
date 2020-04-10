//
// - создать массив с 20 числами.
// let num = [10, 2, 3, 4, 6, 7, 8, 9, 44, 3, 0, 100, 30, 50, 78, 69, 39, 29, 49, 33];

// -- при помощи метода sort отсортировать массив.
// console.log(num.sort());

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// console.log(num.sort((a, b) => b - a));

// -- при помощи filter получить числа кратные 3
// const aNum = num.filter((value) => value % 3 === 0 && value != 0);
// console.log(aNum);

// -- при помощи filter получить числа кратные 10
// const aNum = num.filter((value) => value % 10 === 0 && value != 0);
// console.log(aNum);

// -- перебрать (проитерировать) массив при помощи foreach()
// num.forEach((el, index) => {
//     console.log('array[' + index + '] = ' + el)
// });


// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// const numbers = num.map((num) => num * 3);
// console.log(numbers);

// - создать массив со словами на 15-20 элементов.
let word = ['apple', 'egg', 'Lemon', 'student', 'teacher', 'Whater', 'coca-cola', 'pepsi',
    'macdonalds', 'ball', 'fruit', 'paper'];
// -- отсортировать его по алфавиту в восходящем порядке.
// word.sort(function(a, b){
//     var x = a.toLowerCase();
//     var y = b.toLowerCase();
//     if (x < y) {return -1;}
//     if (x > y) {return 1;}
//     return 0;
// });
// console.table(word);

// -- отсортировать его по алфавиту  в нисходящем порядке.
// word.sort(function (a, b) {
//     var x = a.toLowerCase();
//     var y = b.toLowerCase();
//     if (x > y) {
//         return -1;
//     }
//     if (x < y) {
//         return 1;
//     }
//     return 0;
// });
// console.table(word);

// -- отфильтровать слова длиной менее 4х символов
// let sortWord = word.filter(a => a.length < 4);
// // console.table(sortWord);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// const superWord = word.map((word) => word + '!');
// console.log(superWord);


// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [{name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {
//     name: 'kolya',
//     age: 29,
//     status: true
// }, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {
//     name: 'anya',
//     age: 31,
//     status: false
// }, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {
//     name: 'masha',
//     age: 30,
//     status: true
// }, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true}];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// users.sort((a, b) => {
//     if (a.age < b.age) {
//         return -1;
//     }
//     if (a.age > b.age) {
//         return 1;
//     }
//     return 0;
// });
// console.log(users);
// users.sort((a, b) => a.age - b.age);
// console.log(users);


// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// users.sort((a, b) => a.name.length - b.name.length);
// console.log(users);


// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу
// його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let superUsers = users.map((users, ind) => {
// //     users.id = ind + 1;
// //     return users;
// // });
// // console.log(superUsers);

// - відсортувати його за індентифікатором
// console.log(superUsers.sort((x, y) => y.id - x.id));

// -- наисать функцию калькулятора с 2мя числами и колбеком
// function calc(x, y, callback){
//     console.log(callback(x, y));
// }
// calc(5,7,function (x,y) {
//     return x - y;
// });

// // -- наисать функцию калькулятора с 3мя числами и колбеком
// function calc(x, y, z, callback){
//     console.log(callback(x, y, z));
// }
// calc(5,7,10, function (x, y, z) {
//     return x - y * z;
// });

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
// let cars = [{
//     producer: "subaru",
//     model: "wrx",
//     year: 2010,
//     color: "blue",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 400
// }, {
//     producer: "subaru",
//     model: "legacy",
//     year: 2007,
//     color: "silver",
//     type: "sedan",
//     engine: "ez30",
//     volume: 3,
//     power: 250
// }, {
//     producer: "subaru",
//     model: "tribeca",
//     year: 2011,
//     color: "white",
//     type: "jeep",
//     engine: "ej20",
//     volume: 2,
//     power: 300
// }, {
//     producer: "subaru",
//     model: "leone",
//     year: 1998,
//     color: "yellow",
//     type: "sedan",
//     engine: "ez20x",
//     volume: 2,
//     power: 140
// }, {
//     producer: "subaru",
//     model: "impreza",
//     year: 2014,
//     color: "red",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 200
// }, {
//     producer: "subaru",
//     model: "outback",
//     year: 2014,
//     color: "red",
//     type: "hachback",
//     engine: "ej204",
//     volume: 2,
//     power: 165
// }, {
//     producer: "bmw",
//     model: "115",
//     year: 2013,
//     color: "red",
//     type: "hachback",
//     engine: "f15",
//     volume: 1.5,
//     power: 120
// }, {
//     producer: "bmw",
//     model: "315",
//     year: 2010,
//     color: "white",
//     type: "sedan",
//     engine: "f15",
//     volume: 1.5,
//     power: 120
// }, {
//     producer: "bmw",
//     model: "650",
//     year: 2009,
//     color: "black",
//     type: "coupe",
//     engine: "f60",
//     volume: 6,
//     power: 350
// }, {
//     producer: "bmw",
//     model: "320",
//     year: 2012,
//     color: "red",
//     type: "sedan",
//     engine: "f20",
//     volume: 2,
//     power: 180
// }, {
//     producer: "mercedes",
//     model: "e200",
//     year: 1990,
//     color: "silver",
//     type: "sedan",
//     engine: "eng200",
//     volume: 2,
//     power: 180
// }, {
//     producer: "mercedes",
//     model: "e63",
//     year: 2017,
//     color: "yellow",
//     type: "sedan",
//     engine: "amg63",
//     volume: 3,
//     power: 400
// }, {
//     producer: "mercedes",
//     model: "c250",
//     year: 2017,
//     color: "red",
//     type: "sedan",
//     engine: "eng25",
//     volume: 2.5,
//     power: 230
// }];
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
// let powerfulCar = cars.filter(car => car.volume > 3);
// console.log(powerfulCar);

// - двигун = 2л
// let powerfulCar = cars.filter(car => car.volume === 2);
// console.log(powerfulCar);

// - виробник мерс
// let powerfulCar = cars.filter(car => car.producer === 'mercedes');
// console.log(powerfulCar);

// - двигун більше 3х літрів + виробник мерседес
// let powerfulCar = cars.filter(car => car.volume > 3 && car.producer === 'mercedes');
// console.log(powerfulCar);

// - двигун більше 3х літрів + виробник субару
// let powerfulCar = cars.filter(car => car.volume > 3 && car.producer === 'subaru');
// console.log(powerfulCar);

// - сили більше ніж 300
// let powerfulCar = cars.filter(car => car.power > 300);
// console.log(powerfulCar);

// - сили більше ніж 300 + виробник субару
// let powerfulCar = cars.filter(car => car.power > 300 && car.producer === 'subaru');
// console.log(powerfulCar);

// - мотор серіі ej
// let powerfulCar = cars.filter(car => car.engine[0] === 'e' && car.engine[1] === 'j');
// console.log(powerfulCar);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let powerfulCar = cars.filter(car => {
//     if (car.power > 300 &&
//         car.producer === 'subaru' &&
//         car.engine[0] === 'e' &&
//         car.engine[1] === 'j') return car;
// });
// console.log(powerfulCar);

// - двигун меньше 3х літрів + виробник мерседес
//  let powerfulCar = cars.filter(car => car.volume < 3 && car.producer === 'mercedes');
//  console.log(powerfulCar);

// - двигун більше 2л + сили більше 250
// let powerfulCar = cars.filter(car => car.volume > 2 && car.power > 250);
// console.log(powerfulCar);

// - сили більше 250  + виробник бмв
// let powerfulCar = cars.filter(car => car.producer === 'bmw' && car.power > 250);
// console.log(powerfulCar);


// - взять слдующий массив

// let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Gorodocka', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];


// // -- отсортировать его по id пользователей

// usersWithAddress.sort((a, b) => a.id - b.id);
// console.log(usersWithAddress);

// -- отсортировать его по id пользователей в обратном опрядке

// const sort = usersWithAddress.sort((a, b) => b.id - a.id);
// console.log(sort);

// -- отсортировать его по возрасту пользователей
// const sort = usersWithAddress.sort((a, b) => b.id - a.id);
// console.log(sort);

// -- отсортировать его по возрасту пользователей в обратном порядке
// const sortAB = usersWithAddress.sort((a, b) => a.age - b.age);
// const sortBA = usersWithAddress.sort((a, b) => b.age - a.age);

// -- отсортировать его по имени пользователей
// usersWithAddress.sort((a, b) => {
// if (a.name < b.name) {
//         return -1;
//     }
//     if (a.name > b.name) {
//         return 1;
//     }
//     return 0;
// });
// console.log(usersWithAddress);

// -- отсортировать его по имени пользователей в обратном порядке
// usersWithAddress.sort((a, b) => {
//     if (a.name > b.name) {
//         return -1;
//     }
//     if (a.name < b.name) {
//         return 1;
//     }
//     return 0;
// });
// console.log(usersWithAddress);

// -- отсортировать его по названию улицы  в алфавитном порядке
// usersWithAddress.sort((a, b) => {
// if (a.address.street < b.address.street) {
//         return -1;
//     }
//     if (a.name > b.name) {
//         return 1;
//     }
//     return 0;
// });
// console.log(usersWithAddress);

// -- отсортировать его по номеру дома по возрастанию
// usersWithAddress.sort((a,b) => a.address.number - b.address.number);
// console.log(usersWithAddress);

// -- отфильтровать (оставить) тех кто младше 30
// const niceAge = usersWithAddress.filter(a => a.age < 30);
// console.log(niceAge);

// -- отфильтровать (оставить) тех у кого отрицательный статус
// const niceAge = usersWithAddress.filter(a => a.status === false);
// console.log(niceAge);


// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// const niceAgeStatus = usersWithAddress.filter(a => a.status === false && a.age < 30);
// console.log(niceAgeStatus);

// -- отфильтровать (оставить) тех у кого номер дома четный
// const niceNumber = usersWithAddress.filter(a => a.address.number % 2 === 0);
// console.log(niceNumber);

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
// class Car {
//     constructor(producer, power, owner, price, year) {
//         this.producer = producer;
//         this.power = power;
//         this.owner = owner;
//         this.price = price;
//         this.year = year;
//     }
// }
// Car.prototype.tuningEngine = function (plasPover){
//     this.power *= plasPover;
// }
// Car.prototype.newDriver = function (name, age, experience){
//     this.owner.name = name;
//     this.owner.age = age;
//     this.owner.experience = experience;
// }
//
// let andreyCar = new Car('bmw',300, {name: 'andrey', age: 22, experience: 5}, 10000,2018);
// let dimaCar = new Car('toyota',200, {name: 'dima', age: 23, experience: 3}, 6000,2015);
// let olehyCar = new Car('mersedes',500, {name: 'oleh', age: 28, experience: 7}, 20000,2018);
// let petroCar = new Car('tesla',400, {name: 'petro', age: 32, experience: 5}, 25000,2019);
// let artemCar = new Car('opel',300, {name: 'artem', age: 42, experience: 25}, 13000,2018);
// let ivanCar = new Car('ford',100, {name: 'ivan', age: 27, experience: 8}, 5000,2015);
// let dmytroCar = new Car('renault',120, {name: 'dmutro', age: 30, experience: 12}, 8000,2017);
//
// let megaCars = [andreyCar, dimaCar, olehyCar, petroCar, artemCar, ivanCar, dmytroCar];

//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// andreyCar.tuningEngine(1.1);
// dimaCar.tuningEngine(1.1);
// petroCar.tuningEngine(1.1);
// ivanCar.tuningEngine(1.1);

// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// andreyCar.newDriver('pedro',25,5);
// dimaCar.newDriver('adam',30,12);
// petroCar.newDriver('lev',45,25);
// ivanCar.newDriver('yra',23,5);


// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// for (let i = 0; i < megaCars.length; i+=2) {
//     megaCars[i].tuningEngine(1.1);
//     megaCars[i].price *= 1.05;
// }
// console.log(megaCars);

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший
// for (let i = 0; i < megaCars.length; i++) {
//     if (megaCars[i].owner.experience <= 5 && megaCars[i].owner.age < 25){
//         megaCars[i].owner.experience += 1;
//     }
// }
// console.log(megaCars);

// за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let sumPrise = 0;
// for (let i = 0; i < megaCars.length; i++) {
//     sumPrise += megaCars[i].price;
// }
// console.log(sumPrise);


// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
// let key = 4;
// console.log(`Answer: MinIndex = ${Arr.indexOf(key)}, MaxIndex = ${Arr.lastIndexOf(key)}.`);