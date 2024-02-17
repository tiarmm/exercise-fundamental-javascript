// Exercise 1
// Create a function that can create a triangle pattern according to the height we provide like the 
// following :
//  01
//  02  03
//  04  05  06
//  07  08  09  10
//  Parameters : height → triangle height

// function triangle(height){
//   let currentNumb = 1;
//       for (let i = 1 ; i <= height; i++) {
//       let row = "";
//       for (let j = 1; j <= i; j++) { 
//               row += (currentNumb < 10 ? "0" : "") + currentNumb + " ";
//               currentNumb++;
//       }
//       console.log(row);
//     }
//   }
//       triangle(4);
  

// Exercise - Example
//  ● Create a function that can create a triangle pattern according to the height we provide like the 
// following :
//  1
//  1  2
//  1  2  3
//  1  2  3  4
//  1  2  3  4  5
//  ● Parameters : height → triangle height
//  ● Example input: 5

// function triangle(height){
//     for (let i = 1 ; i <= height; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) { 
//             row += j + " ";
//         }
//         console.log(row); //Print the numbers for each row
//     }
//   }
//     triangle(5);

//Exercise 2
//Create a function that can loop the number of times according to the input we provide, and will 
//replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with 
//"FizzBuzz".
//Parameters : n → total looping
//Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
//Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz
 
// function fizzBuzz(n){
//   let message = "";

//     for (let  i = 1; i <= n; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             message += "FizzBuzz" + "\n";
//     } else if (i % 5 === 0){
//             message += "Fizz" + "\n";
//     } else if (i % 3 === 0){
//             message += "Buzz" + "\n";
//     } else {
//             message += i + "\n";   
//     }  
// }
//  console.log(message);

// }

// fizzBuzz(15);

// Exercise 3
//  ● Create a function to calculate Body Mass Index (BMI)
//  ● Formula : BMI = weight (kg) / (height (meter))²
//  ● Parameters : weight & height
//  ● Return values :
//  ○ < 18.5 return “less weight”
//  ○ 18.5 - 24.9 return “ideal”
//  ○ 25.0 - 29.9 return “overweight”
//  ○ 30.0 - 39.9 return “very overweight”
//  ○ > 39.9 return “obesity”

// function calculateBMI(weight, height) {
//     const bmi = weight / (height * height);
    
//     if(bmi < 18.5){
//       return "less weight";
//     }else if (bmi >= 18.5 && bmi <= 24.9){
//       return "ideal";
//     }else if (bmi >= 25 && bmi <= 29.9){
//       return "overweight";
//     }else if (bmi >= 30 && bmi <= 39.9){
//       return "very overweight"
//     }else{
//       return "Obesity";
//     }
//   }
//   const result = calculateBMI(70,1.75); //weight = kg, height = meters
//   console.log(result);

// Exercise 4
//  ● Write a function to remove all odd numbers in an array and return a new array that contains even 
// numbers only
//  ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

//menggunakan build in method
// function removeOddNumbers(arr){
//     return arr.filter((item) => item % 2 === 0);
// }
//     const inputArr = [1,2,3,4,5,6,7,8,9,10]
//     console.log(removeOddNumbers(inputArr));

//tanpa build in method

function removeOddNumbers(arr){
    const evenNumbers = [];
  
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 === 0){
        evenNumbers.push(arr[i]);
      }
    }
    return evenNumbers;
  }
  
  const inputArr = [1,2,3,4,5,6,7,8,9,10];
  
  console.log(removeOddNumbers(inputArr));
  
  // Exercise 5
  //  ● Write a function to split a string and convert it into an array of words
  //  ○ Example : “Hello World” → [“Hello”, “World”]
  
  //menggunakan build in method
  // function splitString(input){
  //   return input.split(" ");
  // }
  //  console.log(splitString("Hello World"));
  
   //tanpa menggunakan build in method 
  
   const splitString = function (input){
      let kata = [];
      let temp = "";
  
      for(let i = 0; i < input.length; i++){
        if(input[i] === " "){
          kata.push(temp);
          temp = "";
          continue;
        }
  
        temp += input[i];
      }
  
      kata.push(temp);
  
      return kata;
   };
  
   console.log(splitString("Hello World Jogja"));
  