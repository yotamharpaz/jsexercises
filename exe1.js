/*Write a piece of code that computes the sum of digits of a 3-digit number. You can use the template below:
const num = 123 
let sum = 0
// your code goes here
console.log(sum)
Test your code on several different 3-digit numbers (for example 666, 300, 725). Hint: you might need to use Math.floor...*/
const num = 123
let sum = 0
let value = num;
while (value !== 0) {
    console.log(value, sum);
    sum += value % 10;
    value = Math.floor(value / 10);

}

console.log(sum);
