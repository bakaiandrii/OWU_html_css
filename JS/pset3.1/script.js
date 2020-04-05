// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let car ={model:'audi', color:'black', price:15000};
// let fruit ={name:'apple', type:'fruit', color:'green'};
// let computer ={hdd:'250Gb', weight:3, manufectur:'ASUS'};
// let  programer ={age:29, surname:'Kozak', progLanguage:'JScript'};
// let house ={florNumber:2, square:100, location:'lviv'};

// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект.
// Опишите что угодно, машину, картину, болт...
// Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let dog = {poroda:'bandik', temper: ['good', 'brave'], owner: { age:25, sex:'men'}};
// let dish = {isTasty:true, ingredient:['potato', 'meat'], description: { country:'ua'}};
// let televizor = {color:'black', producer:['samsung','sony'], options: {isSmart:true}};
// let book = {author:'aaa', year:[1980, 2000], bookChapter: {first: 'hello java...'}};

// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (const carKeys in car) {
//     console.log(carKeys);
// }
// console.log('*************************************');
// for (const fruitKeys in fruit) {
//     console.log(fruitKeys);
// }
// console.log('*************************************');
// for (const computerKeys in computer) {
//     console.log(computerKeys);
// }
// console.log('*************************************');
// for (const programerKeys in programer) {
//     console.log(programerKeys);
// }
// console.log('*************************************');
// for (const houseKeys in house) {
//     console.log(houseKeys);
// }
// console.log('*************************************');
// for (const manKeys in man) {
//     console.log(manKeys);
// }
// console.log('*************************************');
// for (const dogKeys in dog) {
//     console.log(dogKeys);
// }
// console.log('*************************************');
// for (const dishKeys in dish) {
//     console.log(dishKeys);
// }
// console.log('*************************************');
// for (const televizorKeys in televizor) {
//     console.log(televizorKeys);
// }
// console.log('*************************************');
// for (const bookKeys in book) {
//     console.log(bookKeys);
// }
// console.log('*************************************');

// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(Object.keys(car));
// console.log(Object.keys(fruit));
// console.log(Object.keys(computer));
// console.log(Object.keys(programer));
// console.log(Object.keys(house));
// console.log(Object.keys(man));
// console.log(Object.keys(dog));
// console.log(Object.keys(dish));
// console.log(Object.keys(televizor));
// console.log(Object.keys(book));

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
// (Значаения полей могу быть выдуманными)
// let cars =[
//     {model:'corsa', year:2012, Hpower:75, color:'blue'},
//     {model:'astra', year:2012, Hpower:175, color:'black'},
//     {model:'insignia', year:2012, Hpower:90, color:'white'},
//     {model:'caddet', year:2012, Hpower:120, color:'red'},
//     {model:'pasat', year:2010, Hpower:175, color:'blue'},
//     {model:'tucson', year:2020, Hpower:275, color:'blue'},
//     {model:'M5', year:2019, Hpower:375, color:'silver'},
//     {model:'X5', year:2019, Hpower:375, color:'blue'},
//     {model:'911', year:2018, Hpower:275, color:'orange'},
//     {model:'i30', year:2017, Hpower:175, color:'tomato'},
// ];

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
// (Значаения полей могу быть выдуманными)
// let cities = [
//     {name:'lviv', population:1000000, country:'ukraine',region:'west'},
//     {name:'ternopil', population:700000, country:'ukraine',region:'west'},
//     {name:'rivne', population:700000, country:'ukraine',region:'west'},
//     {name:'kyiv', population:3000000, country:'ukraine',region:'center'},
// ];

// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let carsDriver =[
//     {model:'corsa', year:2012, Hpower:75, color:'blue',driver:{name:'Ivan', age:25, sex:'male', experions:5}},
//     {model:'astra', year:2012, Hpower:175, color:'black',driver:{name:'Ivan', age:25, sex:'male', experions:5}},
//     {model:'insignia', year:2012, Hpower:90, color:'white',driver:{name:'Ivan', age:25, sex:'male', experions:5}},
//     {model:'caddet', year:2012, Hpower:120, color:'red',driver:{name:'Ivan', age:25, sex:'male', experions:5}},
//     {model:'pasat', year:2010, Hpower:175, color:'blue',driver:{name:'Ivan', age:25, sex:'male', experions:5}},
//     {model:'tucson', year:2020, Hpower:275, color:'blue',driver:{name:'Ivan', age:25, sex:'male', experions:5}},
//     {model:'M5', year:2019, Hpower:375, color:'silver',driver:{name:'Ivan', age:25, sex:'male', experions:5}},
//     {model:'X5', year:2019, Hpower:375, color:'blue',driver:{name:'Ivan', age:25, sex:'male', experions:5}},
//     {model:'911', year:2018, Hpower:275, color:'orange',driver:{name:'Ivan', age:25, sex:'male', experions:5}},
//     {model:'i30', year:2017, Hpower:175, color:'tomato',driver:{name:'Ivan', age:25, sex:'male', experions:5}},
// ];

// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0;
// // while(i<cars.length){
// //     console.log(cars[i]);
// //     i++;
// // }
// // i = 0;
// // while(i<cities.length){
// //     console.log(cities[i]);
// //     i++;
// // }
// // i = 0;
// // while(i<carsDriver.length){
// //     console.log(carsDriver[i]);
// //     i++;
// // }

// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// }
// for (let i = 0; i < carsDriver.length; i++) {
//     console.log(carsDriver[i]);
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (const car of cars) {
//     console.log(car);
// }
// for (const citi of cities) {
//     console.log(citi);
// }
// for (const carD of carsDriver) {
//     console.log(carD);
// }

// - взять объекты из задания 1 и превратить каждый в json.
// let carJSON = JSON.stringify(car);
// let fruitJSON = JSON.stringify(fruit);
// let computerJSON = JSON.stringify(computer);
// let programerJSON = JSON.stringify(programer);
// let houseJSON = JSON.stringify(house);

// - взять json из задания 11 и превратить их обратно в объекты.
// let carParsed = JSON.parse(carJSON);
// let fruitParsed = JSON.parse(fruitJSON);
// let computerParsed = JSON.parse(computerJSON);
// let programerParsed = JSON.parse(programerJSON);
// let houseParsed = JSON.parse(houseJSON);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// let carsJson = [];
// for (const carsJsonElement of cars) {
//     carsJson.push(JSON.stringify(carsJsonElement))
// }



// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// let citiesJson = [];
// for (const citiesJsonElement of cities) {
//     citiesJson.push(JSON.stringify(citiesJsonElement))
// }


// let carsParse = [];
// for (const carsJsonElementParse of carsJson) {
//     carsParse.push(JSON.parse(carsJsonElementParse))
// }

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let carsDriverJson = [];
// for (const carsDriverJsonElement of carsDriver) {
//     carsDriverJson.push(JSON.stringify(carsDriverJsonElement))
// }

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
//
// За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
// ];
// let skillsArray = [];
// // for (let i = 0; i < users.length; i++) {
// //     const user = users[i];
// //     for (let j = 0; j < user.skills.length; j++) {
// //         const skills = user.skills[j];
// //         skillsArray.push(skills)
// //     }
// //
// // }
// // console.log(skillsArray);


// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let address = [];
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     address.push(user.address);
// }
// console.log(address);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// const htmlDivElement = document.createElement('div');
// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     const divElement = document.createElement('div');
//     divElement.innerText = `name: ${user.name} address: ${user.address} status:${user.status} age:${user.age}`
//     htmlDivElement.appendChild(divElement);
// }
// document.body.appendChild(htmlDivElement);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
// const htmlDivElement = document.createElement('div');
// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     const divElement = document.createElement('div');
//
//     const nameDiv = document.createElement('div');
//     nameDiv.innerText = `${user.name}`;
//     divElement.appendChild(nameDiv);
//
//     const ageDiv = document.createElement('div');
//     ageDiv.innerText = `${user.age}`;
//     divElement.appendChild(ageDiv);
//
//     const statusDiv = document.createElement('div');
//     statusDiv.innerText = `${user.status}`;
//     divElement.appendChild(statusDiv);
//
//     const addressDiv = document.createElement('div');
//     addressDiv.innerText = `${user.address}`;
//     divElement.appendChild(addressDiv);
//
//     htmlDivElement.appendChild(divElement);
// }
// document.body.appendChild(htmlDivElement);


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// const htmlDivElement = document.createElement('div');
// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     const divElement = document.createElement('div');
//
//     const nameDiv = document.createElement('div');
//     nameDiv.innerText = `${user.name}`;
//     divElement.appendChild(nameDiv);
//
//     const ageDiv = document.createElement('div');
//     ageDiv.innerText = `${user.age}`;
//     divElement.appendChild(ageDiv);
//
//     const statusDiv = document.createElement('div');
//     statusDiv.innerText = `${user.status}`;
//     divElement.appendChild(statusDiv);
//
//     const addressDiv = document.createElement('div');
//     for (const ageDivElement in user.address) {
//         const adressElementDiv = document.createElement('div');
//         adressElementDiv.innerText = ` ${user.address[ageDivElement]}`;
//         // console.log(user.address[ageDivElement]);
//         addressDiv.appendChild(adressElementDiv);
//     }
//     divElement.appendChild(addressDiv);
//     htmlDivElement.appendChild(divElement);
// }
// document.body.appendChild(htmlDivElement);



// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine',
//     city: 'Ternopil'}}....]
// for (let i = 0; i < usersWithId.length; i++) {
//     for (let j = 0; j < citiesWithId.length; j++) {
//         if (usersWithId[i].id === citiesWithId[j].user_id)
//             usersWithId[i]['address'] = citiesWithId[j];
//
//     }
// }
// console.log(usersWithId);

// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// const elementById = document.getElementById('content');
// console.log(elementById.innerText);
// const elementsByClassName = document.getElementsByClassName('rules');
// console.log(elementsByClassName[0].innerText);
// const elementsByTagName = document.getElementsByTagName('h2');
// console.log(elementsByTagName[0].innerText);

// // - змінити цей текст використовуючи селектори id, class,  tag
// elementById.innerText = 'селектори id';
// elementsByClassName[0].innerText = 'селектори class';
// elementsByTagName[0].innerText = 'селектори tag';

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// elementById.style.width='50%';
// elementById.style.height='40px';
// elementsByClassName[0].style.width='50%';
// elementsByClassName[0].style.height='40px';
// elementsByTagName[0].style.width='50%';
// elementsByTagName[0].style.height='40px';

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// const htmlTable = document.createElement('table');
// // htmlTable.style.border='1px solid black';
// // const htmlTr = document.createElement('tr');
// // htmlTable.appendChild(htmlTr);
// // const htmlTh1 = document.createElement('th');
// // htmlTh1.innerText = 'стовпець 1'
// // htmlTh1.style.border='1px solid black';
// // htmlTr.appendChild(htmlTh1);
// // const htmlTh2 = document.createElement('th');
// // htmlTh2.innerText = 'стовпець 2'
// // htmlTh2.style.border='1px solid black';
// // htmlTr.appendChild(htmlTh2);
// // const htmlTh3 = document.createElement('th');
// // htmlTh3.innerText = 'стовпець 3'
// // htmlTh3.style.border='1px solid black';
// // htmlTr.appendChild(htmlTh3);
// // document.body.appendChild(htmlTable);

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// const htmlTable = document.createElement('table');
// htmlTable.style.border='1px solid black';
// for (let i = 0; i < 10; i++) {
//     const htmlTr = document.createElement('tr');
//     htmlTable.appendChild(htmlTr);
//     for (let j = 1; j <= 3; j++) {
//         const htmlTh1 = document.createElement('th');
//         htmlTh1.innerText = `стовпець ${j}`;
//         htmlTh1.style.border='1px solid black';
//         htmlTr.appendChild(htmlTh1);
//     }
// }
// document.body.appendChild(htmlTable);


// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// const htmlTable = document.createElement('table');
// htmlTable.style.border='1px solid black';
// for (let i = 0; i < 10; i++) {
//     const htmlTr = document.createElement('tr');
//     htmlTable.appendChild(htmlTr);
//     for (let j = 1; j <= 3; j++) {
//         const htmlTh1 = document.createElement('th');
//         htmlTh1.innerText = `стовпець ${j}`;
//         htmlTh1.style.border='1px solid black';
//         htmlTr.appendChild(htmlTh1);
//     }
// }
// document.body.appendChild(htmlTable);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені.
// n та m отримати з prompt
// const n = +prompt('enter number row');
// const m = +prompt('enter number cell');
// const htmlTable = document.createElement('table');
// htmlTable.style.border='1px solid black';
// for (let i = 0; i < n; i++) {
//     const htmlTr = document.createElement('tr');
//     htmlTable.appendChild(htmlTr);
//     for (let j = 1; j <= m; j++) {
//         const htmlTh1 = document.createElement('th');
//         htmlTh1.innerText = `стовпець ${j}`;
//         htmlTh1.style.border='1px solid black';
//         htmlTr.appendChild(htmlTh1);
//     }
// }
// document.body.appendChild(htmlTable);

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні
// доступи та дії
// - знайти всі елементі, які мають id
// let elementsWithId = document.getElementsByTagName('*');
// for (let elem of elementsWithId) {
//     if (elem.getAttribute('id')){
//         console.log(elem);
//     }
// }

// - знайти всі параграфи ,та змінити текст на hello oktenweb!
// let elements = document.querySelectorAll('p');
//
// for (let elem of elements) {
//     elem.innerText = 'hello oktenweb!';
// }

//     - знайти всі div та змінити ім колір на червоний
// let elements = document.querySelectorAll('div');
//
// for (let elem of elements) {
//     elem.style.color = 'red';
// }
// ============
// ====class===
//     ============
//
//     - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему
//     контенту яка вказана в параграфі.
//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде
//     змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
// const elementsh2 = document.getElementsByTagName('h2');
// const elementIdContent = document.getElementById('content');
// const ulElement = document.createElement('ul');
// for (const elementsh2Element of elementsh2) {
//     const liElement = document.createElement('li');
//     liElement.innerText = `${elementsh2Element.innerText}`;
//     ulElement.appendChild(liElement);
//     elementIdContent.appendChild(ulElement);
// }


// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому
// блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// //todo add rules
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
// const htmlDivElement = document.createElement('div');
// htmlDivElement.className = 'wrap';
// for (const rule of rules) {
//     const htmlDivElement1 = document.createElement("div");
//     const htmlHeadingElement = document.createElement('h2');
//     const htmlParagraphElement = document.createElement('p');
//     htmlHeadingElement.innerText = `${rule.title}`;
//     htmlParagraphElement.innerText =`${rule.body}`;
//     htmlDivElement1.appendChild(htmlHeadingElement);
//     htmlDivElement1.appendChild(htmlParagraphElement);
//     htmlDivElement.appendChild(htmlDivElement1);
// }
// document.body.appendChild(htmlDivElement)


//
//
//
//
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement
// вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок
// (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement
// вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в
// свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement
// вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує)
// в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще
// один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment
// и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит
// какому посту