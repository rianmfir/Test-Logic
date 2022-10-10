let data = [4, 2, 6, 88, 3, 11];

const filter = index => {
    let low = index[0];
    let hight = index[0];

    for (let i = 0; i < index.length; i++) {
        if (hight < index[i]) {
            hight = index[i];
        }
        if (low > index[i]) {
            low = index[i];
        }
    }

    return ({
        'low': low,
        'hight': hight
    })
}

console.log(filter(data));