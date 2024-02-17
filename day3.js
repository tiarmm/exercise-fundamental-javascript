// ● Write a code to display the multiplication table of a given integer.
//  ○ Example : Number → 9
//  ○ Output : 
// ■ 9 x 1
//  ■ 9 x 2
//  ■ …
//  ■ 9 x 10

//no 1
const input = 9;

for(let i = 1; i <= 10; i++){

const hasil = i * input;

console.log(`${input} * ${i} = ${hasil}`);
}

//  ● Write a code to check whether a string is a palindrome or not.
//  ○ Example : ‘madam’ → palindrome

const kata = "madam";
const splitvaluekata = kata.split('');
const reversekata = splitvaluekata.reverse();
const joinkata = reversekata.join('');

if(kata == joinkata){
    console.log('It is a palindrome');
}
else{
    console.log('It is not a palindrome');
}

//  ● Write a code to convert centimeter to kilometer.
//  ○ Example : 100000 → “1 km”

const jarak = 100000
const convertkilometer = jarak / 100000
console.log(convertkilometer +" km");

//  ● Write a code to format number as currency (IDR)
//  ○ Example : 1000 → “Rp. 1.000,00”

const value = 1000;
console.log("Rp. " + value + ",00");

//  ● Write a code to remove the first occurrence of a given “search string” from a string
//  ○ Example : string = “Hello world”, search string = “ell” → “Ho world”

//no 5
const kalimat = "Hello World";
const replacekalimat = kalimat.replace("ell","");
console.log(replacekalimat);

//  ● Write a code to capitalize the first letter of each word in a string
//  ○ Example : “hello world” → “Hello World”

let originalString = "hello world"
let words = originalString.split(" ");

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}

let capitalizedString = words.join(" ");
console.log(capitalizedString);

//  ● Write a code to reverse a string.
//  ○ Example : “hello” → “olleh”

const word = "hello";
const wordsplit = word.split("")
const reverseword = wordsplit.reverse();
const newword = reverseword.join();
console.log(newword);

// ● Write a code to swap the case of each character from string 
// ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’

// const str = 'The QuiCk BrOwN Fox';
// const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const LOWER = 'abcdefghijklmnopqrstuvwxyz';
// let result = [];

// for (let i = 0; i < str.length; i++) {
//   if(UPPER.indexOf(str[i]) !== -1) {
//     result.push(str[i].toLowerCase());
//   } else if(LOWER.indexOf(str[i] !== -1)) {
//     result.push(str[i].toUpperCase());
//   } else {
//     result.push(str[i]);
//   }
// }
// console.log(result.join(''));

//  ● Write a code to find the largest of two given integers
//  ○ Example : num1 = 42, num2 = 27 → 42

const num1 = 42
const num2 = 27

if(num1 > num2){
    console.log(num1 + " is greater than " + num2);
}else{
    console.log(num1 + "is less than " +num2);
}

//  ● Write a conditional statement to sort three numbers
//  ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42

let n1 = 42;
let n2 = 27;
let n3 = 18;

if (n1 > n2) {
  let sort = n1;
  n1 = n2;
  n2 = sort;
}

if (n1 > n3) {
  let sort = n1;
  n1 = n3;
  n3 = sort;
}

if (n2 > n3) {
  let sort = n2;
  n2 = n3;
  n3 = sort;
}

console.log(n1 + ', ' + n2 + ', ' + n3);

//  ● Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data 
// type.
//  ○ Example : “hello” → 1

let kataa = "hello";
let hasill = "";

if (typeof kataa === "string") {
  hasill = 1;
} else if (typeof kataa === "number") {
  hasill = 2;
} else {
  hasill = 3;
}

console.log(hasill);
console.log(kataa + " -> " + hasill);

//  ● Write a code to change every letter a into * from a string of input
//  ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`

const str = "An apple a day keeps the doctor away";
const modifiedStr = "*";
let result = "";

for (let i = 0; i < str.length; i++){
  if (str[i] === 'a' || str[i] === "A") {
    result += modifiedStr;
  } else {
    result += str[i];
  }
}

console.log(result);

