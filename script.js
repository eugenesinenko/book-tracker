console.log('файл script.js підключено')
//Оголошення масиву данних
const books = [
    {title: 'Кобзар', pages: 720, finished: true},
    {title: 'Хіба ревуть воли як ясла повні?', pages: 400, finished: false},
    {title: '451˚ за Фаренгейтом', pages: 272, finished: false},
    {title: 'Мистецтво війни', pages: 128, finished: true}
];

//Приймаємо масив книг, позначаємо ще непрочитані книги, рахуємо прочитані сторінки
function analyzeBooks(booklist) {
    let readPageSum = 0;
    for(let i = 0; i < booklist.length; i++) { 
        const book = booklist[i];
        if (book.finished === false){
        console.log(`Книгу "${book.title}" ще не прочитано`);
    } else {
        readPageSum += book.pages;
    }
}
 console.log(`Загальна сума прочитаних сторінок: ${readPageSum}`);
}

analyzeBooks(books);
//Приймаємо кількість сторінок і дні, повертаємо кількість сторінок на день
const pagesPerDay = (pages, days) => Math.round(pages/days);
const targetBookPages = 150;
const daysToRead = 15;
console.log(`Щоб прочитати книгу на ${targetBookPages} стор. за ${daysToRead} днів, потрібно читати ${pagesPerDay(targetBookPages, daysToRead)} стор. на день`)