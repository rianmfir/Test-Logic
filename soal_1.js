const factorial = value => {
    let result = value;
    let process = value;
    for (let i = value - 1; i > 0; i--) {
        result *= i;
        process += `*${i}`
    }
    return (`${result} (prosesnya : ${process})`)
}

console.log(factorial(4));
console.log(factorial(7));
console.log(factorial(8));
console.log(factorial(10));