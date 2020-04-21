// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// const textAreaElement = document.querySelector('textarea');
// textAreaElement.oninput = handleTextArea;
// textAreaElement.value = localStorage.getItem('textarea');
//
// function handleTextArea(e) {
//     localStorage.setItem('textarea', e.target.value);
// }

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.

// const form1 = document.forms.form1;
// form1.oninput = function () {
//     setData(this);
// };

// const form = document.forms.form;
//
// getData(form);
//
// form.oninput = function () {
//     setData(this);
// };
//
// function setData(data) {
//     for (let i = 0; i < data.length; i++) {
//         if (data.children[i].name === 'taste' || data.children[i].name === 'gender') {
//             if (data.children[i].checked) {
//                 console.log(data.children[i].value);
//                 data.children[i].value = true;
//             } else {
//                 data.children[i].value = false;
//             }
//         }
//         localStorage.setItem(data.children[i].id, data.children[i].value);
//     }
// }
//
// function getData(data) {
//     for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage.hasOwnProperty(data.children[i].id)) {
//             data.children[i].value = localStorage.getItem(data.children[i].id);
//             if (data.children[i].value === 'true') {
//                 data.children[i].setAttribute('checked', 'checked');
//             }
//         }
//
//     }
//
// }


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем
// поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// const textarea3 = document.getElementById('textarea3');
// const save = document.getElementById('save');
// const prevSave = document.getElementById('prevSave');
// const nextSave = document.getElementById('nextSave');
//
// save.onclick = () => {
//     localStorage.setItem(localStorage.length + 1, textarea3.value);
// };
//
// prevSave.onclick = () => {
//     prevSave.style.visibility = 'visible';
//
//     let ind;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             if (localStorage.getItem(key) === textarea3.value) {
//                 ind = key;
//             }
//         }
//     }
//     if (ind === '1') {
//         prevSave.style.visibility = 'hidden';
//         return;
//     }
//     textarea3.value = localStorage.getItem(ind - 1);
// };
// nextSave.onclick = () => {
//     nextSave.style.visibility = 'visible';
//
//     let ind;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             if (localStorage.getItem(key) === textarea3.value) {
//                 ind = key;
//             }
//         }
//
//     }
//     if (ind === localStorage.length.toString()) {
//         nextSave.style.visibility = 'hidden';
//         return;
//     }
//     textarea3.value = localStorage.getItem(+ind + 1);
// };


// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые
// инпуты для редактирования, которые уже заполнены данными объекта
// const notebook = document.forms.notebook;
// const saveContact = document.getElementById('saveContact');
// const table = document.getElementById('table');
//
// class Contact {
//     constructor(fullName, email, firm, birthday) {
//         this.fullName = fullName;
//         this.email = email;
//         this.firm = firm;
//         this.birthday = birthday;
//     }
// }
//
// saveContact.onclick = function () {
//     let fullName = notebook.fullName.value;
//     let email = notebook.email.value;
//     let firm = notebook.firm.value;
//     let birthday = notebook.birthday.value;
//     let contact = new Contact(fullName, email, firm, birthday);
//     const s = JSON.stringify(contact);
//     localStorage.setItem(localStorage.length + 1, s)
// };
//
// for (const key in localStorage) {
//     if (localStorage.hasOwnProperty(key)) {
//         const parse = JSON.parse(localStorage.getItem(key));
//         const trEl = document.createElement('tr');
//         const tdEl = document.createElement('td');
//         tdEl.innerText = key;
//         trEl.appendChild(tdEl);
//         for (const parseEl in parse) {
//             const tdEl = document.createElement('td');
//             tdEl.innerText = parse[parseEl];
//             trEl.appendChild(tdEl);
//
//         }
//         const changebtn = document.createElement('button');
//         const tdChangeBtn = document.createElement('td');
//         changebtn.setAttribute('id', `changebtn${key}`);
//         changebtn.innerText = `ЗМІНИТИ id${key}`;
//         tdChangeBtn.appendChild(changebtn);
//         trEl.appendChild(tdChangeBtn);
//         changebtn.onclick = () => {
//             const parse1 = JSON.parse(localStorage.getItem(key));
//             notebook.fullName.value = parse1.fullName;
//             notebook.email.value = parse1.email;
//             notebook.firm.value = parse1.firm;
//             notebook.birthday.value = parse1.birthday;
//
//             const saveChanges = document.createElement('button');
//             saveContact.style.display = 'none';
//             saveChanges.innerText = `ЗБЕРЕГТИ ЗМІНИ`;
//             notebook.appendChild(saveChanges);
//             saveChanges.onclick = () => {
//                 localStorage.setItem(key, '');
//                 let fullName = notebook.fullName.value;
//                 let email = notebook.email.value;
//                 let firm = notebook.firm.value;
//                 let birthday = notebook.birthday.value;
//                 let contact = new Contact(fullName, email, firm, birthday);
//                 const s = JSON.stringify(contact);
//                 localStorage.setItem(key, s);
//             }
//         };
//
//         const delbtn = document.createElement('button');
//         const tdDelBtn = document.createElement('td');
//         delbtn.setAttribute('id', `delbtn${key}`);
//         delbtn.innerText = `ВИДАЛИТИ id${key}`
//         tdDelBtn.appendChild(delbtn);
//         trEl.appendChild(tdDelBtn);
//         delbtn.onclick = () => {
//             localStorage.removeItem(key);
//             location.reload();
//         };
//         table.appendChild(trEl);
//     }
//
//
// }
