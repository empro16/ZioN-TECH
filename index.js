const rl = require('readline-sync');
const colors = require('colors');
const title = require('./modules/title.js');
const TeknoEvreniSmsBomb = require('./modules/sms.js');

title('Hosgeldiniz');

let telefon = rl.question('Saldırılacak Numara ? : ' .green);
if (telefon.length != 10) {
    console.log('Düzgün Gir AMK Şu Numarayı'.white);
    process.exit(1);
}
title('Numara: ' + telefon);

let miktar = rl.question("( 01-800 ) Adet Gir : ".green);
if(isNaN(miktar)) return console.log('Lutfen Bir Rakam Giriniz'.red) && process.exit(1);
if (miktar.length == 0) {
    console.log('Miktar Giriniz'.red);
    process.exit(1);
}
title(`Telefon: ${telefon} - Miktar: ${miktar}`);

console.log('                   SİKİŞİ BAŞLATTIM BRO ;) '.rainbow);

TeknoEvreniSmsBomb(telefon, miktar);
