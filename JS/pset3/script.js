// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// let dog = {dogBreed: 'labrador', name: 'Rex', age: 5, isAngry: true, bogOwner:'Andriy'};

// - людину

// let person = {name: 'oleh', age: 18, sex: 'male', isMarried: false, isCarOwner:true};
// - автомобіль
// ler car = {model:'BMW', fuel:'disel', age:'5', color:'red', condition:'good'};
// - квартиру
// let flat ={floor: 7, roomNumber: 2, balcony: true, square: 70, city:'Lviv'};
// - книгу
// let book ={title: 'Kobzar', autor:'Shevchenko', language:'ua', price:500, year: 2020};
//
// -- Створити масив та вивести його в консоль:
//     - з 5 собак
/*let dogs = [
    {dogBreed: 'labrador', name: 'Rex', age: 5, isAngry: true, bogOwner:'Andriy'},
    {dogBreed: 'vivcharka', name: 'barsik', age: 5, isAngry: true, bogOwner:'Andriy'},
    {dogBreed: 'labrador', name: 'Rex', age: 5, isAngry: true, bogOwner:'petor'},
    {dogBreed: 'bolonka', name: 'Rex', age: 5, isAngry: true, bogOwner:'Andriy'},
    {dogBreed: 'york', name: 'Rex', age: 5, isAngry: true, bogOwner:'Andriy'}
];
console.log(dogs);*/
// - 3 5 людей
/*let persons =[
    {name: 'oleh', age: 18, sex: 'male', isMarried: false, isCarOwner:true},
    {name: 'andriy', age: 28, sex: 'male', isMarried: true, isCarOwner:true},
    {name: 'ira', age: 20, sex: 'female', isMarried: false, isCarOwner:false},
    {name: 'petro', age: 38, sex: 'male', isMarried: false, isCarOwner:true},
    {name: 'roman', age: 28, sex: 'male', isMarried: false, isCarOwner:true}
];
console.log(persons);*/

// - з 5 автомобілів
/*let cars =[
    {model:'BMW', fuel:'disel', age:'5', color:'red', condition:'good'},
    {model:'audi', fuel:'gas', age:'10', color:'pink', condition:'good'},
    {model:'vaz', fuel:'gas', age:'50', color:'black', condition:'bad'},
    {model:'opel', fuel:'disel', age:'3', color:'yellow', condition:'good'},
    {model:'renault', fuel:'disel', age:'6', color:'grey', condition:'good'}
];
console.log(cars);*/
//
// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
/*let house ={
    age:10,
    houseSquare:80,
    numRooms:3,
    condition:'goood',
    room: [
        {typeRoom:'bath', numder:1, roomSquare:10},
        {typeRoom:'kitchen', numder:1, roomSquare:20},
        {typeRoom:'bedroom', numder:2, roomSquare:20}
        ]
};
console.log(house);*/
// - водій
// let driver ={
//     name:'Petro',
//     age:30,
//     categoryDriver:['A','B','C'],
//     driverExperience:10,
//     useCar:[
//         {type:'bus',numPasanger:8},
//         {type:'car',numPasanger:5}
//     ],
// };
// console.log(driver);
// - іграшку
/*    let toys ={
        age:'3+',
        color:'green',
        number:100,
        option:[
            {category:'forGirls',toysName:'Barby',model:'Princes'},
            {category:'forBoys',toysName:'HotWeals',model:'Spider'}
        ]
    };

console.log(toys);*/
// - стіл
/*let table ={
    style:'techno',
    material:'wood',
    color:'red',
    year: 2020,
    sizes:[
        {type:'table', height:90, width:70, length:180},
        {type:'armchair', height:90, width:70, length:70}
    ]
};
console.log(table);*/
// - сумка

// let bag ={
//     material:'leather',
//     color:'white',
//     size:'M',
//     gender:'female',
//     manufacturer:[
//         {producerName:'Chanel', model:'Perfect'},
//         {producerName:'NEXT', model:'Perfect'},
//         {producerName:'Reserved', model:'Perfect'},
//     ]
// };
// console.log(bag);
//
//
//
// Дан массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// console.log('статус Андрія: '+ users[7].status);

// - статус Максима
// console.log('статус Максима: '+ users[4].status);

// - ім'я передостаннього об'єкту
// console.log("ім'я передостаннього об'єкту:" + users[9].name);

// - ім'я третього об'єкта
// console.log("ім'я передостаннього об'єкту:" + users[2].name);

// - вік Олега
// console.log("вік Олега:" + users[6].age);

// - вік Олі
// console.log("вік Олега:" + users[6].age);

// - вік + ім'я 5го об'єкта
// console.log(`вік ${users[4].age} + ім'я ${users[4].name} 5го об'єкта`);

// - вік + сатус Анни
// console.log(`вік ${users[5].age} + ім'я ${users[5].name} 5го об'єкта`);

// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
//
// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// let text = document.getElementById('content').innerText;
// console.log(text);

// - отримує текст з блоку з id "rules"
// let innerText = document.getElementById('rules').innerText;
// console.log(innerText);

// - замініть текст параграфа з id 'content' на будь-який інший
// let innerText = document.getElementById('content');
// innerText.innerText = 'амініть текст параграфа з id \'content\' на будь-який інший';
// console.log(innerText);

// - замініть текст параграфа з id 'rules' на будь-який інший
// let innerText = document.getElementById('rules').innerText = 'замініть текст параграфа з id \'rules\'
// на будь-який інший';

// - змініть кожному елементу колір фону на червоний
// let content = document.getElementById('content');
// let rules = document.getElementById('rules');
// let fc_rules = document.getElementsByClassName('fc_rules');
// content.style.backgroundColor = 'red';
// rules.style.backgroundColor = 'red';
// fc_rules[0].style.backgroundColor = 'red';
// fc_rules[1].style.backgroundColor = 'red';
// fc_rules[2].style.backgroundColor = 'red';
// fc_rules[3].style.backgroundColor = 'red';

// - змініть кожному елементу колір тексту на синій
// content.style.color = 'blue';
// rules.style.color = 'blue';
// fc_rules[0].style.color = 'blue';
// fc_rules[1].style.color = 'blue';
// fc_rules[2].style.color = 'blue';
// fc_rules[3].style.color = 'blue';

// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// console.log(document.getElementById('rules').classList);

// - отримати всі елементи з класом fc_rules
// for(const elem of fc_rules){
//     console.log(elem);
// }

// - поміняти колір тексту у всіх елементів fc_rules на червоний

// for (let i = 0; i < fc_rules.length; i++) {
//     fc_rules[i].style.color = 'yellow';
// }
//
// ====================
// ====================
// ====================
//
// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший

// document.getElementById('main_header').style.color = 'red';

// -- робить шириниу елементу ul 400 пікселів
// let ul = document.getElementsByTagName("UL");
// ul[0].style.width = '400px';

// -- робить шириниу всіх елементів з класом linkList шириною 50%
//let linkList = document.getElementsByClassName('linkList');
    // for (let i = 0; i < linkList.length; i++) {
    //     linkList[i].style.width = '50%';
    // }

// -- отримує текст який зберігається в елементі з класом listElement2
// let listElement2 = document.getElementsByClassName('listElement2');
// console.log(listElement2[0]);

// -- отримує всі елементи li та змінює ім колір фону на сірий
// let lis = document.getElementsByTagName('li');
// for (let i = 0; i < lis.length; i++) {
//     lis[i].style.backgroundColor = 'grey';
// }
// -- отримує всі елементи 'a' та додає їм клас anchor
// let a = document.getElementsByTagName('a');
// for (const elem of a) {
//     elem.classList.add('anchor');
// }
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту
// на 40 пікселів
// let aElem = document.getElementsByTagName('a');
// for (const elem of aElem) {
//     if (elem.innerText === 'link3'){
//         elem.style.fontSize = '40px';
//     }
// }

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let aElem = document.getElementsByTagName('a');
// for (const elem of aElem) {
//     elem.classList.add(`element_${elem.innerText}`);
// }

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let background = prompt('enter background');
// let subHeader = document.getElementsByClassName('sub-header');
// for (const elem of subHeader) {
//     elem.style.backgroundColor = background;
// }

// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// let background = prompt('enter background');
// let subHeader = document.getElementsByClassName('sub-header');
// for (const elem of subHeader) {
//     if (elem.innerText === 'content 2 segment'){
//
//         elem.style.backgroundColor = background;
//     }
// }

// Колір отримати з prompt()
// let data = prompt('enter data');

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content_1 = document.getElementsByClassName('content_1');
// content_1[0].innerText = 'заміняє  в ньому тест на довільний';

// -- отримати елементи p та змінити їм paddin на довільне значення
// let pElem = document.getElementsByTagName('p');
// for (const elem of pElem) {
//     elem.style.padding = '30px';
// }
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
// let text2 = document.getElementsByClassName('text2');
// text2[0].innerText = 'заміняє  в ньому тест на довільний';