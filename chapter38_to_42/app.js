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



// Question 7
// function countPairVowels(text) {
//     text = text.toLowerCase();
//     var vowelPairs = [];

//     for (let index = 0; index < text.length - 1; index++) {

//         if (isVowel(text[index])) {

//             if (isVowel(text[index + 1])) {
//                 vowelPairs.push(text[index] + text[index + 1]);
//             }
//         }
//     }

//     document.write(`<h1>Sentence: ${text}</h1>`);
//     document.write(`<h1>There are ${vowelPairs.length} vowel pairs in above sentence.</h1>`);
//     document.write(`<h1>Vowel Pairs: ${vowelPairs}</h1>`);
// }
// function isVowel(character) {
//     var vowel = false;

//     switch (character) {
//         case "a":
//             vowel = true;
//             break;
//         case "e":
//             vowel = true;
//             break;
//         case "i":
//             vowel = true;
//             break;
//         case "o":
//             vowel = true;
//             break;
//         case "u":
//             vowel = true;
//             break;
//     }

//     return vowel;
// }
// countPairVowels("education and vacation with tooths and foots");



// Question 8
// function main() {
//     var distanceInKm = prompt("Enter distance in km");
//     distanceInKm = Number(distanceInKm);

//     document.write(`<h1>${distanceInKm} km = ${kmToMeters(distanceInKm)} m</h1>`);
//     document.write(`<h1>${distanceInKm} km = ${kmToFeets(distanceInKm)} ft</h1>`);
//     document.write(`<h1>${distanceInKm} km = ${kmToInches(distanceInKm)} inch</h1>`);
//     document.write(`<h1>${distanceInKm} km = ${kmToCentimeters(distanceInKm)} cm</h1>`);
// }
// function kmToMeters(distanceInKm) {
//     return distanceInKm * 1000;
// }
// function kmToFeets(distanceInKm) {
//     return distanceInKm * 3281;
// }
// function kmToInches(distanceInKm) {
//     return distanceInKm * 39370;
// }
// function kmToCentimeters(distanceInKm) {
//     return distanceInKm * 100000;
// }
// main()



// Question 9
// function main() {
//     var totalWorkingHours = prompt("Enter total working hours");
//     var perHourRateInRs = 12;
//     totalWorkingHours = parseInt(totalWorkingHours);

//     var overtimePay = calculateOvertimePay(totalWorkingHours, perHourRateInRs);

//     document.write(`<h1>Total Working Hours: ${totalWorkingHours}</h1>`);
//     document.write(`<h1>Per Hour Rate in Rs.: ${perHourRateInRs}</h1>`);

//     if (overtimePay === -1) {
//         document.write(`<h1>You did not work for more than 40 hours!</h1>`);
//         document.write("<h3>Result: No overtime payment will be given!</h3>")
//     }
//     else {
//         document.write(`<h1>Overtime Hours: ${overtimePay / perHourRateInRs}</h1>`);
//         document.write(`<h1>Overtime Payment: Rs. ${overtimePay}/-</h1>`);
//     }
// }
// function calculateOvertimePay(totalWorkingHours, perHourRateInRs) {
//     if (totalWorkingHours > 40) {
//         var overtimeHours = totalWorkingHours - 40;
//         return perHourRateInRs * overtimeHours;
//     }
//     return -1;
// }
// main()