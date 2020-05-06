"use strict";

// №1
let fruits = [{
    name: 'banana',
    count: 10,
}, {
    name: 'orange',
    count: 12,
}, {
    name: 'apple',
    count: 7,
}, {
    name: 'grapefruit',
    count: 5,
}, {
    name: 'mango',
    count: 3,
}];

let fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);

let fruitCount = fruits.map(fruit => fruit.count);
console.log(fruitCount);

// №2
let famousWriters = [{
    name: 'Joanne', 
    books: ['Harry Potter', 'Fantastic Beasts and Where to Find Them'],
}, {
    name: 'Friedrich', 
    books: ['Also sprach Zarathustra', 'Der Wille zur Macht'],
}, {
    name: 'Howard', 
    books: ['The Call of Cthulhu', 'Dagon and Other Macabre Tales'],
}, {
    name: 'Stephen', 
    books: ['The Shining', 'The Green Mile'],
}, {
    name: 'Chuck', 
    books: ['Fight Club', 'Haunted'],
}];

let bookNames = famousWriters.reduce((acc, bookName) => {
    if (bookName.books) {
        acc.push(bookName.books)
    }
    return acc;
}, []);

console.log(bookNames);

// // №2*
// let bookLovers = [{
//     name: 'Clover', 
//     books: ['Harry Potter', 'Fantastic Beasts and Where to Find Them'],
// }, {
//     name: 'Maine', 
//     books: ['Also sprach Zarathustra', 'Harry Potter'],
// }, {
//     name: 'William', 
//     books: ['The Call of Cthulhu', 'The Green Mile'],
// }, {
//     name: 'Charles', 
//     books: ['The Shining', 'The Green Mile'],
// }, {
//     name: 'Flaffie', 
//     books: ['Fight Club', 'Fantastic Beasts and Where to Find Them'],
// }];

// let bookNames = bookLovers.reduce((acc, bookName) => {
//     if (bookName.books) {
//         acc.push(bookName.books)
//     }
//     return acc;
// }, []);

// function unique(bookNames) {
//     return Array.from(new Set(bookNames));
// };

// alert(unique(bookNames)); 
