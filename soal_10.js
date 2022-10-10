const tahunKabisat = value => {
    if (value % 4 === 0) {
        console.log(`${value} adalah tahun kabisat`);
    } else {
        console.log(`${value} bukan tahun kabisat`);
    }
}

tahunKabisat(2024);
tahunKabisat(2021);
tahunKabisat(1996);
tahunKabisat(1994);