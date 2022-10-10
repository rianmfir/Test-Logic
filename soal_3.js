
const printDigitValue = value => {
    let temp = value.replace(/[^0-9]/g, '');

    for (let i = 0; i < temp.length; i++) {
        if (i === 0) {
            console.log(temp);
            console.log(parseInt(temp[i] * (Math.pow(10, (temp.length - (i + 1))))));
        } else {
            console.log(parseInt(temp[i] * (Math.pow(10, (temp.length - (i + 1))))));
        }
    }
}

printDigitValue("9.86-A5.321");