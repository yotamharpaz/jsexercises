/*Write a piece of code that finds the solutions for a quadratic equation. You can use the following template:
// y = a * x^2 + b * x + c

You can find on Google the formula to find the solutions. Test your code on different a, b, c values (like 1, 5, 6 or 1, -1, -1)*/
const a = 1; b = -6; c = 9;  // stands for x**2 - 6*x + 9 = 0
let solutionA = solutionB = 0
const d = -b
function q(x) {
    
    solutionB = (d + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 * a;
    solutionA = (d - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 * a;
    
    console.log(solutionA , solutionB)
}

q(10)