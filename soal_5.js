
const terbilang = value => {
    let huruf = ['', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan', 'Sepuluh', 'Sebelas'];
    let result = '';

    if (value < 12) {
        result = huruf[value];
    } else if (value < 20) {
        result = huruf[value - 10] + " Belas";
    } else if (value < 100) {
        result = huruf[parseInt(value / 10)] + " Puluh " + terbilang(parseInt(value % 10));
    } else if (value == 100) {
        result = "Seratus";
    } else {
        result = "Silahkan Masukkan Bilangan 1-100";
    }

    return result;
}


console.log(terbilang(4));
console.log(terbilang(20));
console.log(terbilang(39));
console.log(terbilang(104));