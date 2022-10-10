let data = [1, 4, 7, 9, 12];
let low = 2;
let high = 15;

const filter = value => {
    let result = [];

    value.forEach(element => {
        if (element > low && element < high) {
            result.push(element);
        }
    });
    return result.length;
}

console.log(filter(data));