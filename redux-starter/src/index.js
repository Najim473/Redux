import { pipe } from 'lodash/fp';
let username = "Herly";
let message = "Hello " + username.trim() + "Good Morning";
console.log(message);
const trim = (name) => name.trim();
const generateMessage = (message) => (name) => `Hello ${name}, ${message}!`;
const convertToUpper = (name) => name.toUpperCase();
const newFunc = pipe(trim, convertToUpper, generateMessage('Have a nice day'))
const result = newFunc(username)
console.log(result);


function multi(a) {
    return function (b) {
        return a * b
    }
}
let result1 = multi(1)(3)
console.log(result1)