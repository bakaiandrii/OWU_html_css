// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// const elem = document.getElementsByClassName('button')
// const clickDelete = elem[0];
// clickDelete.onclick = () => {
//     const elementById = document.getElementById('text');
//     elementById.style.display = 'none';
// };

//    - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// const elem = document.getElementsByClassName('button')
// elem[0].onclick = function()  {
//     this.style.display = 'none';
// };


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


// const submit = document.getElementsByClassName('input');
//
// submit[0].addEventListener('click', () => {
//     let age = document.getElementById('age');
//     if (age.value < 18){
//         alert('You is to younger!!!')
//     }
// });

// - Создайте меню, которое раскрывается/сворачивается при клике

// const myDropdown = document.getElementById('myDropdown');
// const dropBtn = document.getElementsByClassName('dropbtn');
//
// dropBtn[0].onclick = () => {
//     if(myDropdown.style.display === 'block'){
//         myDropdown.style.display = 'none';
//     }else {
//         myDropdown.style.display = 'block';
//     }
// };

// - Создать список комментариев , пример объекта коментария -
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// //     Вывести список комментариев в документ, каждый в своем блоке.
// //     Добавьте каждому комментарию по кнопке для сворачивания его body.

let data = {title: 'lorem', body: 'lorem ipsum dolo sit ameti'};
const divCom = document.getElementById('comment');
const elemH2 = document.createElement('h2');
elemH2.innerText = `${data.title};`;
divCom.appendChild(elemH2);
const elemDiv = document.createElement('div');
const elemBtn = document.createElement('button');
elemDiv.innerText = `${data.body};`;
elemBtn.innerText = 'Приховати';
divCom.appendChild(elemDiv);
elemDiv.appendChild(elemBtn);
const commBtn = document.querySelector('#comment button');

commBtn.onclick = () => {
    elemDiv.style.display = 'none';
};

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

const formBtn = document.getElementById('formbtn');
const form1 = document.forms.form1;
const form2 = document.forms.form2;

formBtn.onclick = () => {
    console.log(form1.email.value);
    console.log(form1.pswd.value);
    console.log(form2.number.value);
    console.log(form2.text1.value);
};


// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
function createTable(row, col, idOfDivEl) {
    const el = document.getElementById(`${idOfDivEl}`);
    const table = document.createElement('table');
    for (let i = 1; i <= row; i++) {
        const tr = document.createElement('tr');
        for (let j = 1; j <= col; j++) {
            const td = document.createElement('td');
            td.innerText = `colom${j}`;
            tr.appendChild(td);
            td.style.border = '1px solid black';
        }
        table.appendChild(tr);
    }
    el.appendChild(table);
// return table;
}

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
const tableBtn = document.getElementById('tablebtn');
const formTable = document.forms.formTable;

tableBtn.onclick = () => {
    const row = formTable.numberRov.value;
    const col = formTable.numberCol.value;
    const id = formTable.idOfEl.value;
    createTable(row, col, id);
};

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// var slideIndex = [1,1];
// var slideId = ["mySlides1", "mySlides2"]
// showSlides(1, 0);
// showSlides(1, 1);
//
// function plusSlides(n, no) {
//     showSlides(slideIndex[no] += n, no);
// }
//
// function showSlides(n, no) {
//     var i;
//     var x = document.getElementsByClassName(slideId[no]);
//     if (n > x.length) {slideIndex[no] = 1}
//     if (n < 1) {slideIndex[no] = x.length}
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     x[slideIndex[no]-1].style.display = "block";
// }


// - Сворити масив не цензцрних слів.
let badWords = ['бля', 'гондон', 'єбало', 'пидар', 'fuck you'];
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
const checkWord = document.getElementById('checkWord');
const checkWordbtn = document.getElementById('checkWordbtn');

checkWordbtn.onclick = () => {
    for (const badWordsEl of badWords) {
        if (badWordsEl === checkWord.value) {
            alert(`${badWordsEl} is bad word!!!`)
        }
    }
};


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

const checkSentance = document.getElementById('checkSentance');
const checkSentancebtn = document.getElementById('checkSentancebtn');

checkSentancebtn.onclick = () => {
    const split = checkSentance.value.split(' ');
    for (const splitEl of split) {
        for (const badWordsEl of badWords) {
            if (badWordsEl === splitEl) {
                alert(`${splitEl} is bad word!!!`)
            }
        }
    }
};

// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем
// заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

const elH2 = document.querySelectorAll('#wrap h2');
const elp = document.querySelectorAll('#wrap p');
const linkForRules = document.getElementById('linkForRules');
let ind = 0;
for (const el of elH2) {
    const a = document.createElement('a');
    a.setAttribute('href', `#${ind += 1}`);
    a.innerText = `${el.innerText}`
    a.style.display = 'block';
    linkForRules.appendChild(a);
}
ind = 0;
for (const elem of elp) {
    const a = document.createElement('a');
    a.setAttribute('name', `${ind += 1}`);
    a.innerText = `${elem.innerText}`
    elem.innerText = '';
    elem.appendChild(a);
}
// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
const resolt = document.getElementById('resolt');
const check1 = document.getElementById('check1');
const check2 = document.getElementById('check2');
const check3 = document.getElementById('check3');
let chek = [0,0,0];
check1.onclick = function () {
    if (check1.checked){chek[0] = 1;
        console.log(chek);
    }
}
check2.onclick = function () {
    if (check2.checked){chek[1] = 1;}
}
check3.onclick = function () {
    if (check3.checked){chek[2] = 1;}
}



// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан