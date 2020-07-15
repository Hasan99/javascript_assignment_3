// Question 1
// function power(a, b) {
//     return a ** b;
// }



// Question 2
// function isLeapYear(year) {
//     if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
//         return true;
//     else
//         return false;
// }



// Question 3
// function calculatePerimeter(a, b, c) {
//     return ((a + b + c) / 2);
// }
// function calculateArea(perimeter, a, b, c) {
//     return (perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c));
// }
// var side1, side2, side3;
// side1 = 2;
// side2 = 4;
// side3 = 8;
// var s = calculatePerimeter(side1, side2, side3);
// var area = calculateArea(s, side1, side2, side3);
// console.log("Perimeter: " + s);
// console.log("Area: " + area);



// Question 4
// function getAverage(marksOfSubject1, marksOfSubject2, marksOfSubject3) {
//     return (marksOfSubject1 + marksOfSubject2 + marksOfSubject3) / 3;
// }
// function getPercentage(marksOfSubject1, marksOfSubject2, marksOfSubject3) {
//     return ((marksOfSubject1 + marksOfSubject2 + marksOfSubject3) / 300) * 100;
// }
// function main() {
//     var avg = getAverage(90, 95, 99);
//     var per = getPercentage(90, 95, 99);
//     console.log("Average: " + avg);
//     console.log("Percentage: " + per);
// }
// main()



// Question 5
// function indexOf(text, character) {
//     for (let index = 0; index < text.length; index++) {
//         if (character === text[index]) {
//             return index;
//         }
//     }

//     return -1;
// }



// Question 6
// function deleteVowels(text) {
//     var withoutVowels = "";
//     text = text.toLowerCase();

//     for (let index = 0; index < text.length; index++) {
//         if (text[index] !== "a" && text[index] !== "e" && text[index] !== "i" && text[index] !== "o" && text[index] !== "u") {
//             withoutVowels = withoutVowels + text[index];
//         }
//     }
//     console.log("With vowels: " + text);
//     console.log("Without vowels: " + withoutVowels);
// }