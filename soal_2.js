let input = 'abcde';

const myReverse = value => {
    let result = '';
    for (let i = value.length - 1; i >= 0; i--) {
        result += value.charAt(i);
    }

    return result;
}

console.log("Input  : ", input);
console.log("Result : ", myReverse(input));