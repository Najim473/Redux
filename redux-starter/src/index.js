// EXERCICE 01
// REPLACE PRICE $8 TO $10 & RATING 4.7 TO 4.8
import { produce } from "immer";
const book = {
    author: "Robert Kiyosaki",
    book: {
        name: "Rich Dad Poor Dad",
        price: "$8",
        rating: 4.7,
    },
};
// USING IMMER
const newBook = produce(book, (drafState) => {
    (drafState.price = "$10"), (drafState.rating = 4.8);
});

// SPREAD OPERATOR
// const newBook1 = {
//     ...book,
//     book: { ...book.book, price: '$10', rating: 4.8 }
// }
console.log(book);
// USING IMMER
console.log(newBook);

// USING SPREAD OPERATOR
// console.log(newBook1)

// EXERCISE 02
// REPLACE BOOK2 TO BOOK4
const arrOfBooks = ["Book1", "Book2", "Book3"];
console.log(arrOfBooks);
const newArraOfBooks = arrOfBooks.map((book) =>
    book === "Book2" ? "Book4" : book
);
console.log(newArraOfBooks);
