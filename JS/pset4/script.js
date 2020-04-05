// - створити функцію яка виводить масив
// let arr = [1, 'das',122,'asasas'];
// function consolArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }
// consolArray(arr);

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// let arr1 = [];
//
// function fillsUpArrayRandom(arr, arraySize, max) {
//     for (let i = 0; i < arraySize; i++) {
//          arr.push(Math.floor(Math.random() * Math.floor(max)));
//     }
//     consolArray(arr);
// }
// fillsUpArrayRandom(arr1, 10, 100);


// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function min(a, b, c,){
//     if (a < b && a < c){
//         return a ;
//     } else if (b < c){
//         return b ;
//     } else return c;
// }
//
// console.log(min(11, 12, 5));

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function max(a, b, c,){
//     if (a > b && a > c){
//         return a ;
//     } else if (b > c){
//         return b ;
//     } else return c;
// }
//
// console.log(max(11, 12, 5));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function maxAndMin() {
// let min = Math.min.apply(null, arguments);
//     console.log('max: ' + Math.max.apply(null, arguments));
//
//     return min;
// }
//
// console.log(maxAndMin(1, -2, 4, 5, 60));


// - створити функцію яка виводить масив
// let arr = [1, 'das',122,'asasas'];
// function consolArray(arr) {
//     for (const argument of arr) {
//         console.log(argument);
//     }
// }
// consolArray(arr);


// - створити функцію яка повертає найбільше число з масиву
// let arr = [-1, -20, -0.1, -1]
// function max(arr) {
//     let max = - Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         // let max = arr[i];
//         if (arr[i] > max){
//             max = arr[i];
//         }
//     }
// return max;
// }
// console.log(max(arr));

// - створити функцію яка повертає найменьше число з масиву
// let arr = [-1, -20, -0.1, -1]
// function min(arr) {
//     let min =  Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         // let max = arr[i];
//         if (arr[i] < min){
//             min = arr[i];
//         }
//     }
// return min;
// }
// console.log(min(arr));


// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function sum(a) {
// return a.join('');
// }
//
// console.log(sum([1, 2, 3, 4, 5]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function average(numArr) {
//     let sum = 0;
//     for (const numArrElement of numArr) {
//         sum += numArrElement;
//     }
//     return sum / numArr.length;
// }
//
// console.log(average([1, 2, 3, 4, 5]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// function numElle(arr) {
// return arr.length
// }
// console.log(numElle([{asdsa:'asdasd'}, true, 3, 4, [1,2,3]]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// function numElle(arr) {
//     let count = 0;
//     for (const arrElement in arr) {
//         if(typeof arr[arrElement] !== 'object' && !Array.isArray(arr[arrElement])){
//             count +=1;
//             console.log(1);
//         }
//         if (Array.isArray(arr[arrElement])){
//             count +=arr[arrElement].length;
//             console.log(arr[arrElement].length);
//         }
//         if (typeof arr[arrElement] === 'object' && !Array.isArray(arr[arrElement])){
//             for (const argument in arr[arrElement]) count++;
//
//             console.log(count);
//         }
//     }
//     return count;
// }
// let arr = [
//     {name:'ssdas', age:18},
//     1223,
//     [1,2,3,4,5],
//     'asdasdasdasd'
// ];
// console.log(numElle(arr));


// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
// let a = [1,2,3,4];
// let b = [2,3,4,5];
// результат
//     [3,5,7,9]
// function addTwoArray(arr1, arr2) {
//     sumArr = [];
//     if (arr1.length == arr2.length){
//         for (let i = 0; i < arr1.length; i++) {
//             sumArr.push(arr1[i] + arr2[i]);
//
//         }
//
//     }
// return sumArr;
// }
//
// console.log(addTwoArray(a,b));  //[3, 5, 7, 9]

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let arr = [3, 5, 7, 9];
// function changeEl(arr, i){
//     if (arr.length - 1 >= i || i < 0 ){
//         return console.log(`i mast be from 0 to ${arr.length - 2}`);
//     }
//
//     for (let j = 0; j < arr.length; j++) {
//         if (j === i){
//             let arrI = arr[j];
//             arr[j] = arr[j +1]
//             arr[j +1] = arrI;
//         }
//
//     }
//
// }
// changeEl(arr,-1);
// console.log(arr);

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// let arr = [1, 0, 6, 0, 3];
// //
// // function sortingZeroToEnd(arr) {
// //     let areaElement;
// //     for (let i = 0; i < arr.length-1; i++) {
// //         if(arr[i] === 0) {
// //             areaElement = arr.splice(i, 1);
// //             arr.push(areaElement[0]);
// //         }
// //     }
// // }
// // sortingZeroToEnd(arr);
// // console.log(arr);

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// function addHello() {
//     const htmlDivElement = document.createElement('div');
//     htmlDivElement.innerText = 'Hello owu';
//     document.body.appendChild(htmlDivElement);
// }
// addHello();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function addElement(element, text) {
//     const createElement = document.createElement(element);
//     createElement.innerText = text;
//     document.body.appendChild(createElement);
// }
// addElement('div','Hello JSscript');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
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
// function showCars(element, objCar) {
//     for (const elementElement of objCar) {
//         const elementHTML = document.createElement(element);
//         elementHTML.innerText = `model: ${elementElement.model} year: ${elementElement.year} Hpower: ${elementElement.Hpower} model: ${elementElement.color}`
//         document.body.appendChild(elementHTML);
//     }
// }
// showCars('div', cars);


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// (на основі минулого ДЗ)
// function showCars(element, objCar) {
//     for (const elementElement of objCar) {
//         const elementHTML = document.createElement(element);
//
//         const model = document.createElement(element);
//         model.innerText = `model: ${elementElement.model}`;
//         elementHTML.appendChild(model);
//         const year = document.createElement(element);
//         year.innerText = `model: ${elementElement.year}`;
//         elementHTML.appendChild(year);
//         const Hpower = document.createElement(element);
//         Hpower.innerText = `model: ${elementElement.Hpower}`;
//         elementHTML.appendChild(Hpower);
//         const color = document.createElement(element);
//         color.innerText = `model: ${elementElement.color}`;
//         elementHTML.appendChild(color);
//
//         document.body.appendChild(elementHTML);
//     }
// }
//
// showCars('div', cars);


// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {
//     id: 2,
//     name: 'petya',
//     age: 30,
//     status: true
// }, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {
//     user_id: 1,
//     country: 'Ukraine',
//     city: 'Ternopil'
// }, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// function addArray(usersWithId, citiesWithId) {
//     for (let i = 0; i < usersWithId.length; i++) {
//         for (let j = 0; j < citiesWithId.length; j++) {
//             if (usersWithId[i].id === citiesWithId[j].user_id)
//                 usersWithId[i]['address'] = citiesWithId[j];
//
//         }
//
//     }
// }
//
// addArray(usersWithId,citiesWithId);
// console.log(usersWithId);


// Частковий приклад реультату:
//
//
//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//todo add rules
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
// function addRules(rules) {
//     const htmlDivElement = document.createElement('div');
//     htmlDivElement.className = 'wrap';
//     for (const rule of rules) {
//         const htmlDivElement1 = document.createElement("div");
//         const htmlHeadingElement = document.createElement('h2');
//         const htmlParagraphElement = document.createElement('p');
//         htmlHeadingElement.innerText = `${rule.title}`;
//         htmlParagraphElement.innerText = `${rule.body}`;
//         htmlDivElement1.appendChild(htmlHeadingElement);
//         htmlDivElement1.appendChild(htmlParagraphElement);
//         htmlDivElement.appendChild(htmlDivElement1);
//     }
//     document.body.appendChild(htmlDivElement)
// }
// addRules(rules);