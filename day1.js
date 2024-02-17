//Write a code to find area of rectangle
const length = 5;
const width = 3;

const area = length * width;

console.log(area);

//Write a code to find perimeter of rectangle
const panjang = 5;
const lebar = 3;

const perimeter = panjang * 2 + lebar * 2;

console.log(perimeter);

// Write a code to find angles of triangle if two angles are given.
const a = 80;
const b = 65;

console.log(180 - (a + b));

//Write a code to find diameter, circumference and area of a circle
const radius = 5;
const diameter = radius * 2;
const pi = 3.14159265359;

const circumference = 2 * pi * radius;
const luas = pi * radius * radius;

console.log(diameter);
console.log(circumference);
console.log(luas);

//Write a code to get difference between dates in days.
//Example : date1 = 2022-01-20, date2 = 2022-01-22 → 2
const date1 = new Date ('2022-01-20');
const date2 = new Date ('2022-01-22');

//Hitung diff in milliseconds
const diff = date2 - date1;

//convert milliseconds ke days
const days = diff/(24 * 60 * 60 *1000);
console.log(days);

//Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days). 
//Example : 400 days → 1 year, 1 month, 5 days
let num = 400;

let year = parseInt (num / 365);
let month = parseInt((num % 365) / 30);
let dayyy = parseInt((num % 365) % 30);

console.log(year +" year", month +" month" , dayyy + " day" );
//Example: 366 days → 1 year, 0 month, 1 day
let numm = 366;

let yearr = parseInt (numm / 365);
let monthh = parseInt((numm % 365) / 30);
let dayyyy = parseInt((numm % 365) % 30); 

console.log(yearr +" year", monthh +" month" , dayyyy + " day" );
