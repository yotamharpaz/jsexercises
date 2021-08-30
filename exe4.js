/*You are given an array of a student's grades during the school year. Your task is to compute the following statistics:
The range of the grades (difference between highest and lowest)
The median grade (the grade in the middle)
The range of the grades from the second half of the school year
Here's a template you can use:*/
const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92]
sortedGrades = grades.slice(0,grades.length)
 const range=Math.max(...grades)-Math.min(...grades);
console.log(range);


const marray = sortedGrades.sort((el1,el2)=>el1-el2)
const halfi = marray.length/2;
const median = marray[halfi-1];
console.log(median);


const halfYear= grades.slice(halfi,9);
const range2=Math.max(...halfYear)-Math.min(...halfYear);
console.log(range2)