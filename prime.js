let n = parseInt(prompt("Enter the number: "));
let a = 0;
if (n == 1) {
    console.log("1 is a  prime number");
}
else if (n > 1) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            a = 1;
        
        }
    }
    if (a) {
        console.log( n,"is not prime number");
    } else {
        console.log( n , "is  prime number");
    }
}
else {
    console.log("The number is not a prime number.");
}



