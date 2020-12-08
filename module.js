// - Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let txt = document.createElement('div')
//     txt.setAttribute('id', 'text');
//     txt.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae deserunt fugit itaque laudantium molestiae nam nulla omnis provident, quam qui voluptate voluptates? Corporis distinctio earum iste nisi perferendis, voluptatem.'
// document.body.appendChild(txt);
//
// let btn = document.createElement('button');
//     btn.innerText = 'Push me!'
// document.body.appendChild(btn);
//
// btn.onclick = () => {
//     txt.hidden = true;
// }


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// let button = document.createElement('button');
// button.innerText = 'Push me!'
// document.body.appendChild(button);
//
// button.onclick = () =>{
//     button.hidden = true;
// }


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let input = document.createElement('input');
// input.accept = 'age'
// document.body.appendChild(input);
// let button = document.createElement('button');
// button.innerText = 'Accept'
// document.body.appendChild(button);
//
// button.onclick = () => {
//     if (input.value < 18 && input.value > 0) alert('You are under 18!');
//     if (input.value >= 18 && input.value > 0) alert('Welcome!');
//     if (input.value <= 0) alert('Incorrect data!');
// }


// - Создайте меню, которое раскрывается/сворачивается при клике
//
//
// const menuTitle = document.getElementById('menuTitle');
// const subMenu = document.getElementById('subMenu');
// let flag = false;
//
// menuTitle.onclick = () => {
//     if (flag){
//         subMenu.hidden = true;
//         flag = false;
//     }
//     else {
//         subMenu.hidden = false;
//         flag = true;
//     }
// }


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// const comentList = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// ];
//
// let flag = false;
//
// for (const coment of comentList) {
//     let comentBlock = document.createElement('div');
//     let title = document.createElement('h3');
//     title.innerText = coment.title;
//     let body = document.createElement('p');
//     body.innerText = coment.body;
//     comentBlock.appendChild(title);
//     comentBlock.appendChild(body);
//     document.body.appendChild(comentBlock);
//     let button = document.createElement('button');
//     button.innerText = 'Push me!';
//     comentBlock.appendChild(button);
//
//     button.onclick = () => {
//         if (flag) {
//             body.hidden = true;
//             flag = false;
//         }
//         else {
//             body.hidden = false;
//             flag = true;
//         }
//     }
// }


// - створити 2 форми  по 2 інпути в кожній.
// ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
//
// const btn = document.getElementById('btn');
//
// btn.onclick = () => {
//     console.log(document.forms.formOne.inputOne.value);
//     console.log(document.forms.formOne.inputTwo.value);
//     console.log(document.forms.formTwo.inputThree.value);
//     console.log(document.forms.formTwo.inputFour.value);
// }


// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
//
// let htmlDivElement = document.createElement('div');
// document.body.appendChild(htmlDivElement);
//
//
// function createTable(row, cells, element) {
//
//     let table = document.createElement('table');
//
//     for (let i = 0; i <= row; i++) {
//         let tr = document.createElement('tr');
//
//         for (let j = 0; j <= cells; j++) {
//             let td = document.createElement('td');
//             td.innerText = 'Okten'
//             tr.appendChild(td);
//         }
//
//         table.appendChild(tr);
//     }
//
//     element.appendChild(table);
// }
//
// createTable(4, 3, htmlDivElement);


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
//
// const inputOne = document.createElement('input');
// document.body.appendChild(inputOne);
// const inputTwo = document.createElement('input');
// document.body.appendChild(inputTwo);
// const inputThree = document.createElement('input');
// document.body.appendChild(inputThree);
//
// const btn = document.createElement('button');
// btn.innerText = 'Push me!';
// document.body.appendChild(btn);
//
// let htmlDivElement = document.createElement('div');
// document.body.appendChild(htmlDivElement);
//
//
// btn.onclick = (ev, row, cells, value) => {
//     row = inputOne.value;
//     cells = inputTwo.value;
//     value = inputThree.value;
//
//     let table = document.createElement('table');
//
//     for (let i = 0; i <= row; i++) {
//         let tr = document.createElement('tr');
//
//         for (let j = 0; j <= cells; j++) {
//             let td = document.createElement('td');
//             td.innerText = value;
//             tr.appendChild(td);
//         }
//
//         table.appendChild(tr);
//     }
//     htmlDivElement.appendChild(table);
// }


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
// let imgArray = [
//     {id: 1, img_url: './images/asa-rodger-B8xmtKWLrVo-unsplash.jpg'},
//     {id: 2, img_url: './images/b-k-HAl6CKxM3xU-unsplash (1).jpg'},
//     {id: 3, img_url: './images/bjorn-snelders-zNNPSqKRR2c-unsplash.jpg'},
//     {id: 4, img_url: './images/fabrizio-conti-h8v1mpLmGU0-unsplash.jpg'},
//     {id: 5, img_url: './images/jack-anstey-XVoyX7l9ocY-unsplash.jpg'},
//     {id: 6, img_url: './images/justin-luebke-Y0a6EeC1a6M-unsplash.jpg'},
//     {id: 6, img_url: './images/sinitta-leunen-1KZf4VJMbqM-unsplash.jpg'}
// ];
//
//
// let htmlDivElement = document.createElement('div');
// document.body.appendChild(htmlDivElement);
//
// let img = document.createElement('img');
// let index = 0;
// img.src = imgArray[index].img_url;
// img.style.width = '400px';
// img.style.height = '300px';
// htmlDivElement.appendChild(img);
//
// const btmOne = document.createElement('button');
// btmOne.innerHTML = '<h1> < </h1>'
// document.body.appendChild(btmOne);
// const btmTwo = document.createElement('button');
// btmTwo.innerHTML = '<h1> > </h1>'
// document.body.appendChild(btmTwo);
//
// btmOne.onclick = () => {
//     index - 1 < 0
//         ? index = imgArray.length - 1
//         : index--
//
//     img.src = imgArray[index].img_url;
// }
// btmTwo.onclick = () => {
//     index + 1 > imgArray.length - 1
//         ? index = 0
//         : index++
//
//     img.src = imgArray[index].img_url;
// }


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
//     кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
//
// const badWordArray = ['shit', 'fuck', 'bastard', 'fuck you', 'bitch', 'whore', 'bint'];
//
// const input = document.createElement('input');
// document.body.appendChild(input);
// const button = document.createElement('button');
// button.innerText = 'Confirm'
// document.body.appendChild(button);
//
// button.onclick = () => {
//     for (const word of badWordArray) {
//         if (input.value === word) {
//             alert('Warning!!!')
//         }
//     }
// }


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
//
// const badWordArray = ['shit', 'fuck', 'bastard', 'bitch', 'whore'];
//
// const input = document.createElement('input');
// document.body.appendChild(input);
// const button = document.createElement('button');
// button.innerText = 'Confirm'
// document.body.appendChild(button);
//
//
// button.onclick = () => {
//     let str = input.value.split(' ');
//     for (const word of badWordArray) {
//         for (const element of str) {
//             if (element === word) {
//                 alert('Warning!!!');
//                 console.log('Warning!!!');
//             }
//         }
//     }
// }


// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление
// по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//
//
// const content = document.getElementById('content');
// const menu = document.createElement('div');
// const wrap = document.getElementById('wrap');
// const h2Array = document.getElementsByTagName('h2');
// let ul = document.createElement('ul');
//
// for (let i = 0; i < h2Array.length; i++) {
//     const li = document.createElement('li');
//     const a = document.createElement('a');
//     let anchor = 'anchor' + i;
//     a.href = '#' + anchor;
//     h2Array[i].setAttribute('id', anchor);
//     a.innerHTML = h2Array[i].innerText;
//     li.appendChild(a);
//     ul.appendChild(li);
// }
// menu.appendChild(ul);
// content.appendChild(menu);
// menu.style.float = 'left'
// wrap.style.float = 'left'


//----------------------------------------------------------------------------------------------------------------------


// -- взять массив пользователей
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// // Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// // Фильтры могут работать как вместе так и по отдельности.
// // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// // 2й - оставляет старше 29 лет включительно
// // 3й - оставляет тех у кого город киев
// // Данные выводить в документ
// //
// //
// const mainDiv = document.createElement('div');
// document.body.appendChild(mainDiv);
// const divFilter = document.createElement('div');
//
// const chekOne = document.createElement('input');
// chekOne.type = 'checkbox';
// chekOne.name = 'check';
// divFilter.appendChild(chekOne);
// const labelOne = document.createElement('label');
// labelOne.innerText = 'Cо статусом false';
// divFilter.appendChild(labelOne);
//
// const chekTwo = document.createElement('input');
// chekTwo.type = 'checkbox';
// chekTwo.name = 'check';
// divFilter.appendChild(chekTwo);
// const labelTwo = document.createElement('label');
// labelTwo.innerText = 'Cтарше 29 лет';
// divFilter.appendChild(labelTwo);
//
// const chekThree = document.createElement('input');
// chekThree.type = 'checkbox';
// chekThree.name = 'check';
// divFilter.appendChild(chekThree);
// const labelThree = document.createElement('label');
// labelThree.innerText = 'Город Киев';
// divFilter.appendChild(labelThree);
//
// const button = document.createElement('button');
// button.innerText = 'Filter';
// divFilter.appendChild(button);
//
// document.body.appendChild(divFilter);
//
//
// button.onclick = () => {
//     let arrayFilter = JSON.parse(JSON.stringify(usersWithAddress));
//
//     if (chekOne.checked) arrayFilter = arrayFilter.filter(value => !value.status);
//     if (chekTwo.checked) arrayFilter = arrayFilter.filter(value => value.age >= 29);
//     if (chekThree.checked) arrayFilter = arrayFilter.filter(value => value.address.city === 'Kyiv');
//
//     mainDiv.innerHTML = ''
//     mainDiv.appendChild(renderUsers(arrayFilter));
// }
//
//
// function renderUsers(array) {
//     const usersDiv = document.createElement('dic');
//     array.forEach(item => {
//         const usr = document.createElement('div');
//         usr.innerHTML = `ID: ${item.id} | NAME: ${item.name} | AGE: ${item.age} | STATUS: ${item.status} | ADDRESS: ${item.address.city} ${item.address.street} ${item.address.number}`
//         usersDiv.appendChild(usr);
//     });
//     mainDiv.appendChild(usersDiv);
// }
//
// renderUsers(usersWithAddress);


//----------------------------------------------------------------------------------------------------------------------


//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры.
// Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед",
// вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента
// и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему,
// лежащему с ним на одном уровне
//
//








// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
//
// const txt = document.getElementById('txt');
//
// txt.onmouseup = () => {
//     txt.style.textDecoration = 'underline';
// }
