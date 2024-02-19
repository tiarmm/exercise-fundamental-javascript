//Exercise
//No. 1
//Create a function to check if two objects are equal 
//a. Example
//Input :  { a: 2 } & { a: 1 }
//Output: false

// function areObjectsEqual(obj1,obj2){

//     //untuk menampung keys kedua object
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);

//     //cek dulu objectnya sama apa engga
//     if(keys1.length !== keys2.length){
//         return false;
//     }

//     //cek valuenya setiap key sama atau enggak
//     for(const key of keys1){
//         if (obj1[key] !== obj2[key]){
//             return false;
//         }
//     }

//     //kalau  !== brarti equal
//     return true;
// }
// const obj1 = { a: 2 };
// const obj2 = { a: 1 };

// console.log(areObjectsEqual(obj1, obj2));


//b. Example
//Input :  { a: “Hello” } & { a: 1 }
//Output: false
//c. Example
//Input :  { a: 1 } & { a: 1 }
//Output: true

//No 2
// ● Create a function to get the intersection of two objects
//  ● Example
//  ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
//  ○ Output: { a: 1 }

// function intersectionTwoObjects(obj1,obj2){

//     //untuk menampung intersection
//     const intersection = {} 
 
//     //looping key dari obj1
//     for (const key in obj1){

//     //untuk ngecek key di obj 1 ada di obj2 & kalau ada 
//     //ngecek apakah key yg sama mempunyai value yg sama juga

//     if(obj2.hasOwnProperty(key) && obj1[key] === obj2[key]){

//     //jika true/semuanya terpenuhi, key yg sama = value yg sama 
//         intersection[key] = obj1[key];
//     }

// }
// return intersection;
// }
// const obj1 = {a: 1, b: 2};
// const obj2 = {a: 1, c: 3};

// const result =intersectionTwoObjects(obj1,obj2);
// console.log(intersectionTwoObjects(obj1,obj2));

// console.log(result);

//No 3

//Create a function to merge two array of student data and remove duplicate data
//Student data : name & email
//Example : 
//Array1 → [
//{ name: ‘Student 1’, email : ‘student1@mail.com’  }, 
//{ name: ‘Student 2’, email : ‘student2@mail.com’  }
//]
//Array2 → [
//{ name: ‘Student 1’, email : ‘student1@mail.com’  }, 
//{ name: ‘Student 3’, email : ‘student3@mail.com’  }
//]
//Result : 
//ArrayResult → [
//{ name: ‘Student 1’, email : ‘student1@mail.com’  }, 
//{ name: ‘Student 2’, email : ‘student2@mail.com’  },
//{ name: ‘Student 3’, email : ‘student3@mail.com’  }

// function mergeAndRemoveDuplicates(array1, array2) {
//     // Combine the two arrays into one
//     const mergedArray = array1.concat(array2);
//     console.log(mergedArray);

//     // Create an empty array to store unique students
//     const uniqueStudents = [];

//     // Loop through each student in the merged array
//     for (const student of mergedArray) {
//         // Check if the student's email is not already in the uniqueStudents array
//         if (!uniqueStudents.some(uniqueStudent => uniqueStudent.email === student.email)) {
//             // If not, add the student to the uniqueStudents array
//             uniqueStudents.push(student);
//             console.log(uniqueStudents);
//         }
//     }

//     return uniqueStudents;
// }


// // Example usage:
// const array1 = [
//     { name: 'Student 1', email: 'student1@mail.com' },
//     { name: 'Student 2', email: 'student2@mail.com' }
// ];

// const array2 = [
//     { name: 'Student 1', email: 'student1@mail.com' },
//     { name: 'Student 3', email: 'student3@mail.com' }
// ];

// const mergedAndUniqueArray = mergeAndRemoveDuplicates(array1, array2);
// console.log(mergedAndUniqueArray);

    // No 4
    // Create a function that can accept input as an array of objects and switch all values into property and 
    // property into value
    // Example : 
    // Input : [{ name: ‘David’, age: 20 }]
    //  ○ Output : [{ David: ‘name’, 20: ‘age’}]

    function switchValuesAndProperties(arrayOfObjects) {
        const result = [];
        
        for (const obj of arrayOfObjects) {
            const switchedObj = {};
            
            
            for (const [key, value] of Object.entries(obj)) {
                switchedObj[value] = key;
            }
            
            result.push(switchedObj);
        }
    
        return result;
    }
    
    // Example usage:
    const inputArray = [{ name: 'David', age: 20 }];
    const outputArray = switchValuesAndProperties(inputArray);
    console.log(outputArray);

    //No 5
    // ● Create a function to find a factorial number using recursion
    // ● Example
    // ○ Input :  5
    // ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120
   
    function factorial(n) {
        // Base case: factorial of 0 is 1
        if (n === 0 || n === 1) {
            return 1;
        } else {
            // Recursive case: n! = n * (n-1)!
            return n * factorial(n - 1);
        }
    }
    
    // Example usage:
    const input = 5;
    const result = factorial(input);
    
    console.log(`${input}! = ${result}`);
    