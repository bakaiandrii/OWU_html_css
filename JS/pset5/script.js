// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
// function TegDescription (tagName, description, attr){
//     this.tagName = tagName;
//     this.description =description;
//     this.attr = attr;
// }
// let aTag = new TegDescription('a','Тег <a> является одним из важных элементов HTML и ' +
//     'предназначен для создания ссылок', [
//         {titleOfAttr:'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr:'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
//     {titleOfAttr:'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл'},
//         ]);
//
// let divTag = new TegDescription('div','Элемент <div> является блочным элементом и предназначен' +
//     ' для выделения фрагмента документа с целью изменения вида содержимого.', [
//     {titleOfAttr:'align', actionOfAttr: 'Задает выравнивание содержимого тега div.'},
//     {titleOfAttr:'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}
// ]);
//
// let h1Tag = new TegDescription('h1','HTML предлагает шесть заголовков разного уровня,' +
//     ' которые показывают относительную важность секции, расположенной после заголовка. ', [
//     {titleOfAttr:'align', actionOfAttr: 'Определяет выравнивание заголовка.'},
// ]);
//
// let spanTag = new TegDescription('span','Тег <span> предназначен для определения строчных' +
//     ' элементов документа', [
//     {titleOfAttr:'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш'},
//     {titleOfAttr:'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}
// ]);
//
//
// let inputTag = new TegDescription('input','Тег <input> является одним из разносторонних элементов ' +
//     'формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем', [
//     {titleOfAttr:'accept', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш'},
//     {titleOfAttr:'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.'}
// ]);
//
// let optionTag = new TegDescription('option','ег <option> определяет отдельные пункты списка, ' +
//     'создаваемого с помощью контейнера <select>', [
//     {titleOfAttr:'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//     {titleOfAttr:'label', actionOfAttr: 'Указание метки пункта списка.'}
// ]);
//
// let selectTag = new TegDescription('select','Тег <select> позволяет создать элемент интерфейса ' +
//     'в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.', [
//     {titleOfAttr:'daccesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш'},
//     {titleOfAttr:'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы'}
// ]);
// console.log(selectTag);


// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
// class TegDescription {
//     constructor(tagName, description, attr) {
//         this.tagName = tagName;
//         this.description =description;
//         this.attr = attr;
//     }
// }
// let aTag = new TegDescription('a','Тег <a> является одним из важных элементов HTML и ' +
//     'предназначен для создания ссылок', [
//     {titleOfAttr:'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr:'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
//     {titleOfAttr:'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл'},
// ]);
//
// let divTag = new TegDescription('div','Элемент <div> является блочным элементом и предназначен' +
//     ' для выделения фрагмента документа с целью изменения вида содержимого.', [
//     {titleOfAttr:'align', actionOfAttr: 'Задает выравнивание содержимого тега div.'},
//     {titleOfAttr:'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}
// ]);
//
// let h1Tag = new TegDescription('h1','HTML предлагает шесть заголовков разного уровня,' +
//     ' которые показывают относительную важность секции, расположенной после заголовка. ', [
//     {titleOfAttr:'align', actionOfAttr: 'Определяет выравнивание заголовка.'},
// ]);
//
// let spanTag = new TegDescription('span','Тег <span> предназначен для определения строчных' +
//     ' элементов документа', [
//     {titleOfAttr:'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш'},
//     {titleOfAttr:'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}
// ]);
//
//
// let inputTag = new TegDescription('input','Тег <input> является одним из разносторонних элементов ' +
//     'формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем', [
//     {titleOfAttr:'accept', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш'},
//     {titleOfAttr:'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.'}
// ]);
//
// let optionTag = new TegDescription('option','ег <option> определяет отдельные пункты списка, ' +
//     'создаваемого с помощью контейнера <select>', [
//     {titleOfAttr:'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//     {titleOfAttr:'label', actionOfAttr: 'Указание метки пункта списка.'}
// ]);
//
// let selectTag = new TegDescription('select','Тег <select> позволяет создать элемент интерфейса ' +
//     'в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.', [
//     {titleOfAttr:'daccesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш'},
//     {titleOfAttr:'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы'}
// ]);
// console.log(selectTag);

// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
//     додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// let car = {
//     model: 'insignia',
//     producer:'opel',
//     year: 2017,
//     speedMax: 180,
//     engineCapacity: 2.0,
//     drive: function () {
//         console.log(`їдемо зі швидкістю ${this.speedMax} на годину`);
//     },
//     info: function () {
//         console.log(this);
//     },
//     increaceMaxSpeed: function (newSpeed = 20) {
//         this.speedMax += newSpeed;
//     },
//     changeYear: function (newValue) {
//         this.year = newValue;
//         console.log(this.year);
//     },
//     addDriver: function (driver) {
//         this.driver = driver;
//     }
// };
// let driver = {name:'Ivan', age:25, sex:'male', experions:5};
// car.addDriver(driver);
// console.log(car);


// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// function Car (model, producer, year, speedMax, engineCapacity) {
//     this.model = model || 'insignia';
//     this.producer = producer || 'opel';
//     this.year = year || 2017;
//     this.speedMax = speedMax || 180;
//     this.engineCapacity = engineCapacity || 2.0;
//     this.drive =  function () {
//         console.log(`їдемо зі швидкістю ${this.speedMax} на годину`);
//     };
//     this.info = function () {
//         console.log(this);
//     };
//     this.increaceMaxSpeed = function (newSpeed = 20) {
//         this.speedMax += newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//         console.log(this.year);
//     };
//     this.addDriver =  function (driver) {
//         this.driver = driver;
//     };
// };
//
// let carOpel = new Car();
// let driver = {name:'Ivan', age:25, sex:'male', experions:5};
// carOpel.addDriver(driver);
// console.log(carOpel);


// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// class Car {
//     constructor (model, producer, year, speedMax, engineCapacity) {
//         this.model = model || 'insignia';
//         this.producer = producer || 'opel';
//         this.year = year || 2017;
//         this.speedMax = speedMax || 180;
//         this.engineCapacity = engineCapacity || 2.0;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.speedMax} на годину`);
//         }
//         this.info = function () {
//             console.log(this);
//         }
//         this.increaceMaxSpeed = function (newSpeed = 20) {
//             this.speedMax += newSpeed;
//         }
//         this.changeYear = function (newValue) {
//             this.year = newValue;
//             console.log(this.year);
//         }
//         this.addDriver = function (driver) {
//             this.driver = driver;
//         }
//     }
// }
//
//
// let carOpel = new Car();
// //let driver = {name:'Ivan', age:25, sex:'male', experions:5};
// carOpel.changeYear(2018);
// console.log(carOpel);


// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let anna = new Cinderella('anna', 18, 37);
// let ira = new Cinderella('ira', 19, 40);
// let snijanna = new Cinderella('snijanna', 18, 39);
// let olena = new Cinderella('olena', 28, 39);
// let ivanka = new Cinderella('ivanka', 20, 37);
// let yljana = new Cinderella('yljana', 18, 36.5);
// let lyba = new Cinderella('lyba', 23, 37);
// let solomia = new Cinderella('solomia', 17, 36);
// let olga = new Cinderella('olga', 19, 37);
// let zorjana = new Cinderella('zorjana', 24, 39);
//
// let cinderellaArray = new Array(anna, ira, snijanna, olena, ivanka, yljana, lyba, solomia, olga, zorjana);
//
// class Prince extends Cinderella {
//     constructor(name, age, shoesSize) {
//         super(name, age);
//         this.shoesSize = shoesSize;
//     }
// }
//
// let princeBohdan = new Prince('bohdan', 27, 36);
//
//
// for (const cinderellaArrayElement of cinderellaArray) {
//     if (cinderellaArrayElement.footSize == princeBohdan.shoesSize) {
//         console.log(cinderellaArrayElement.name);
//     }
// }


// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

// class Cinderella {
//     constructor(name, age, footSize){
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// let anna = new Cinderella('anna',18, 37);
// let ira = new Cinderella('ira',19, 40);
// let snijanna = new Cinderella('snijanna',18, 39);
// let olena = new Cinderella('olena',28, 39);
// let ivanka = new Cinderella('ivanka',20, 37);
// let yljana = new Cinderella('yljana',18, 36.5);
// let lyba = new Cinderella('lyba',23, 37);
// let solomia = new Cinderella('solomia',17, 36);
// let olga = new Cinderella('olga',19, 37);
// let zorjana = new Cinderella('zorjana',24, 39);
//
// let cinderellaArray = new Array(anna, ira, snijanna, olena, ivanka, yljana, lyba, solomia, olga, zorjana);
//
// class Prince extends Cinderella{
//     constructor(name, age, shoesSize) {
//         super(name, age);
//         this.shoesSize = shoesSize;
//     }
// }
// let princeBohdan = new Prince('bohdan',27, 37);
//
// function findCinderella(cinderellaArray, princeBohdan) {
//     for (const cinderellaArrayElement of cinderellaArray) {
//         if (cinderellaArrayElement.footSize == princeBohdan.shoesSize){
//             return cinderellaArrayElement.name
//         }
//     }
//
// }
//
// console.log(findCinderella(cinderellaArray, princeBohdan));