// Exercise 1

// ● Create a function to calculate array of student data
// ● The object has this following properties :
// ○ Name → String
// ○ Email → String
// ○ Age → Date
// ○ Score → Number
// ● Parameters : array of student
// ● Return values :
// ○ Object with this following properties :
// ■ Score
// ● Highest
// ● Lowest
// ● Average
// ■ Age
// ● Highest
// ● Lowest
// ● Average

// function calculateStudentData(students) {
//     if (!students || students.length === 0) {
//       return null;
//     }
  
//     // Initialize variables for score and age calculations
//     let totalScore = 0;
//     let totalAge = 0;
//     let highestScore = Number.MIN_SAFE_INTEGER;
//     let lowestScore = Number.MAX_SAFE_INTEGER;
//     let highestAge = Number.MIN_SAFE_INTEGER;
//     let lowestAge = Number.MAX_SAFE_INTEGER;
  
//     // Iterate through the array of students
//     students.forEach(student => {
//       // Calculate score statistics
//       totalScore += student.Score;
//       if (student.Score > highestScore) {
//         highestScore = student.Score;
//       }
//       if (student.Score < lowestScore) {
//         lowestScore = student.Score;
//       }
  
//       // Calculate age statistics
//       const ageInYears = new Date().getFullYear() - new Date(student.Age).getFullYear();
//       totalAge += ageInYears;
//       if (ageInYears > highestAge) {
//         highestAge = ageInYears;
//       }
//       if (ageInYears < lowestAge) {
//         lowestAge = ageInYears;
//       }
//     });
  
//     // Calculate average score and age
//     const averageScore = totalScore / students.length;
//     const averageAge = totalAge / students.length;
  
//     // Return the calculated data
//     return {
//       Score: {
//         Highest: highestScore,
//         Lowest: lowestScore,
//         Average: averageScore,
//       },
//       Age: {
//         Highest: highestAge,
//         Lowest: lowestAge,
//         Average: averageAge,
//       },
//     };
//   }
  
//   // Example usage:
//   const students = [
//     { Name: 'John', Email: 'john@example.com', Age: new Date('1990-01-15'), Score: 85 },
//     { Name: 'Alice', Email: 'alice@example.com', Age: new Date('1992-05-20'), Score: 92 },
//     { Name: 'Bob', Email: 'bob@example.com', Age: new Date('1991-08-10'), Score: 78 },
//   ];
  
//   const result = calculateStudentData(students);
//   console.log(result);

// // Exercise 2

// // ● Create a program to create transaction
// // ● Product Class
// // ○ Properties
// // ■ Name
// // ■ Price
// // ● Transaction Class
// // ○ Properties
// // ■ Total
// // ■ Product
// // ● All product data
// // ● Qty

// // ○ Add to cart method → Add product to transaction
// // ○ Show total method → Show total current transaction
// // ○ Checkout method → Finalize transaction, return transaction data

// class Product {
//     constructor(name, price) {
//       this.Name = name;
//       this.Price = price;
//     }
//   }
  
//   class Transaction {
//     constructor() {
//       this.products = [];
//       this.total = 0;
//     }
  
//     addToCart(product, qty) {
//       if (!product instanceof Product) {
//         console.error('Invalid product!');
//         return;
//       }
  
//       const totalProductPrice = product.Price * qty;
//       this.products.push({
//         product,
//         qty,
//         totalProductPrice,
//       });
  
//       this.total += totalProductPrice;
//     }
  
//     showTotal() {
//       console.log('Current Transaction Total: $', this.total.toFixed(2));
//     }
  
//     checkout() {
//       console.log('Transaction Completed:');
//       this.products.forEach((item, index) => {
//         console.log(`Item ${index + 1}: ${item.product.Name} x${item.qty} - $${item.totalProductPrice.toFixed(2)}`);
//       });
//       console.log('Total: $', this.total.toFixed(2));
//       console.log('Thank you for your purchase!');
//     }
//   }
  
//   // Example usage:
//   const product1 = new Product('Laptop', 1200);
//   const product2 = new Product('Headphones', 50);
//   const product3 = new Product('Mouse', 20);
  
//   const transaction = new Transaction();
  
//   transaction.addToCart(product1, 2);
//   transaction.addToCart(product2, 1);
//   transaction.addToCart(product3, 3);
  
//   transaction.showTotal();
//   transaction.checkout();