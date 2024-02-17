// Write a code to convert celsius to fahrenheit
// Example: 60 Celcius → 140 Fahrenheit
// biasakan penulisan suhu huruf kecil

const suhu = 60
const convertsuhu = ((suhu* (9/5)) + 32 );
console.log(convertsuhu+ " Farenheit");

// Write a code to check whether the number is odd or even
// Example: 25 → odd number, 2 → even number

const num = 25;
if (num % 2 == 0) {
    console.log("even number");
} else {
    console.log("odd number");
}

// Write a code to check whether the number is prime number or not
// Example: 7 → 7 is a prime number
// Example: 6 → 6 is not a prime number
//bilangan prima hanya bisa dibagi 1 dan dibagi bilang itu sendiri
//bilangan prima tidak ada yg dibawah angka 2

const angkaa = 3;
let isPrime = true;

for(let i = 2; i < angkaa; i++){
    if(angkaa % i == 0){
        isPrime = false;
        break;
    }
}

console.log(isPrime);

// Write a code to find the sum of the numbers 1 to N
// Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// Example: 3 → 1 + 2 + 3 = 6

let number = 5;
let sum = 0;
for (i = 1 ; i <= number ; i++){
    sum += i; // sum = sum + 1
}
console.log(sum);

// Write a code to find factorial of a number
// Example: 4! → 4 x 3 x 2 x 1 = 24
// Example: 6! → 6 x 4 x 3 x 2 x 1 = 720

let inputt = 4;
let fact = 1;
for (j = 1 ; j <= inputt ; j++){
    fact = fact * j; 
}
console.log(fact);

// Write a code to print the first N fibonacci numbers
// Example: 15 → 610
// bilangan Fibonacci adalah jumlah dari dua bilangan sebelumnya.
// Rumus Fibonacci Fn = F(n-1)+(Fn-2)

let x = 0;
let y = 1;
let n = 3;

for (let i = 0 ; i < n ; i++){
    z = x + y ;
    y = x;
    x = z;
    console.log(z);
}
