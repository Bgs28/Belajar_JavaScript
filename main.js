// function convertCelciusToFahrenheit(temperature){
//     const temperatureInFahrenheit = (temperature * 9/5) + 32;

//     console.log('Hasil Konversi: ', temperatureInFahrenheit);
// }

// convertCelciusToFahrenheit(175)

// --> deklarasi
// let temperatureInFahrenheit = null;

// const convertCelciusToFahrenheit = function (temperature){
//     const result = (9/5) * temperature + 32;
//     return result;
// }

// temperatureInFahrenheit = convertCelciusToFahrenheit(90);
// console.log('Hasil Konversi: ', temperatureInFahrenheit);


// --> Refactor

// let temperatureInFahrenheit;

// const convertCelciusToFahrenheit = (temperature) =>{
//     const result = (9 / 5) * temperature + 32;
//     return result;
// };

// temperatureInFahrenheit = convertCelciusToFahrenheit(90);
// console.log('Hasil Konversi: ', temperatureInFahrenheit);

 //==> spread Operator with object

//  const obj1 = {name :'Bagas'};
//  const obj2 = {address : 'Jl. Merdeka No. 1'};

//  const newobj = {...obj1, ...obj2};

//  console.log(`Saya ${newobj.name}, Saya Tinggal di ${newobj.address}.`);

 // ==> spread Operator with array

//  const arr1 = ['Bagas'];
//  const arr2 = ['Jl. Merdeka No. 1'];

//  const newarr = [...arr1, ...arr2];
// console.log(newarr);

// ==> rest Operator

// -->contoh 1

// function myfunc(...name){
//     console.log('name: ', name);
// }

// myfunc('Bagas', 'Hou Yi');

// --> contoh 2

// function myfunc(nomor, ...name){
//     console.log('nomor: ', nomor);
//     console.log('name: ', name);
//     console.log('Jumlah Nama: ', name.length);
// }

// myfunc(1, 'Bagas', 'Hou Yi', 'Dhontol');

// const employees = [
//   {
//     name: 'Fulan',
//     email: 'fulan@dicoding.com',
//     joinYear: 2020,
//   },
// ];

// function addEmployee(name, email, joinYear) {
//     const newEmployee = {
//         name: name,
//         email: email,
//         joinYear: joinYear,
//     };
//     employees.push(newEmployee);
// }

// addEmployee('Bagas', 'Bagas@gmail.com', 2024);

// console.log(employees);

// ==> Flow Controls

// function checkNilai(Nilais){
//     for (let i = 0; i < Nilais.length; i++){
//         if(typeof Nilais[i] !== "number"){
//             throw new Error("Invalid Input. Tolong Masukkan Nilai Array");
//         }

//         const Nilai = Nilais[i];
//         let predikat;

//         if(Nilai >= 90){
//             predikat = "A";
//         }else if(Nilai >= 80){
//             predikat = "B";
//         }else if(Nilai >= 70){
//             predikat = "C";
//         }else if(Nilai >= 60){
//             predikat = "D";
//         }else{
//             predikat = "E";
//         }

//         console.log(`Nilai ${i + 1}: ${Nilai} ( ${predikat} )`)
//     }
// }


// try {
//     const NilaiSiswa = [97,23,67,78,89];
//     checkNilai(NilaiSiswa);
// } catch (e) {
//     console.error(e.message);
// }

// ==> Module 
// ==> import fungsi dari modul.mjs

// import myfungsi from './modul.mjs';

// myfungsi();

// ==> import variabel dari modul.mjs

// cara 1
// import {name, address, age} from './modul.mjs';
// console.log(name);
// console.log(address);
// console.log(age);

// cara 2

// import * as mydata from './modul.mjs';
// console.log(mydata.name);

// Latihan module

/**
 * TODO:
 * 1. Impor fungsi unique dari utils.mjs secara default
 * 2. Impor fungsi splitString dari utils.mjs secara named
 *
 * Catatan.
 * Jangan ubah kode apa pun yang sudah tersedia sebelumnya
 */
import unique from './utils.mjs';
import {splitString} from './utils.mjs';

const string = 'saippuakivikauppias';
const array = splitString(string);
const uniqueArray = unique(array);

console.log(string);
console.log(array);
console.log(uniqueArray);
