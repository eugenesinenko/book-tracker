console.log('файл script.js підключено')
const books = [
    {title: 'Кобзар', author: 'Тарас Шевченко', pages: 720, finished: true},
    {title: 'Хіба ревуть воли як ясла повні?', author: 'Панас Мирний', pages: 400, finished: false},
    {title: '451˚ за Фаренгейтом', author: 'Рей Бредбері', pages: 272, finished: false},
    {title: 'Мистецтво війни', author: 'Сунь-цзи', pages: 128, finished: true}
];
//Прибираємо статичний приклад
const staticCards = document.querySelectorAll('.book-card');
staticCards.forEach(card => card.remove());
const booksContainer = document.querySelector('#books-list');

//Функція рендеру, проходить масив данних
function renderBooks(booklist) {
    booksContainer.innerHTML = '';
    booklist.forEach(book => {

//Створення елементу для кожного запису
const card = document.createElement('article');
card.classList.add('book-card');

//Атрибут і умовний клас
card.dataset.pages = book.pages;
if (!book.finished) {
    card.classList.add('unread');
}
//Створюємо блок обкладинки
const cover = document.createElement('div');
cover.classList.add('book-cover');
cover.textContent = 'Обкладинка';

//Створюємо контейнер для текстової інформації
const info = document.createElement('div');
info.classList.add('book-info');
const title = document.createElement('h3');
title.textContent = book.title;

//Формуємо рядок з автором
const author = document.createElement('p');
const authorLabel = document.createElement('strong');
authorLabel.textContent = 'Автор: ';
author.append(authorLabel, book.author);

//Формуємо статус з кольоровими позначками в залежності від значення finished
const status = document.createElement('p');
const statusLabel = document.createElement('strong');
statusLabel.textContent = 'Статус: ';
const statusBadge = document.createElement('span');
statusBadge.classList.add('status-badge');

if (book.finished) {
    statusBadge.classList.add('status-done');
    statusBadge.textContent = 'Прочитано';
} else {
    statusBadge.classList.add('status-reading');
    statusBadge.textContent = 'Читаю';
}

status.append(statusLabel, statusBadge);

//Складаємо повну інформаційну картку
info.append(title, author, status);
card.append(cover, info);

booksContainer.append(card);
    });

//Динамічно обраховуємо статистику читання
const doneCount = booklist.filter(book => book.finished).length;
const readingCount = booklist.filter(book => !book.finished).length;
const planningCount = 0;

    const booksCountElement = document.querySelector('#books-count');
    if (booksCountElement) {
        booksCountElement.textContent = `Загалом книг у списку: ${booklist.length}`;
    }

    const statDone = document.querySelector('#stat-done');
    if (statDone) statDone.textContent = `Прочитано: ${doneCount}`;

    const statReading = document.querySelector('#stat-reading');
    if (statReading) statReading.textContent = `В процесі: ${readingCount}`;

    const statPlanning = document.querySelector('#stat-planning');
    if (statPlanning) statPlanning.textContent = `В планах: ${planningCount}`;
}

renderBooks(books);