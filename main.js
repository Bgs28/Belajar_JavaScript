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

const employees = [
  {
    name: 'Fulan',
    email: 'fulan@dicoding.com',
    joinYear: 2020,
  },
];

function addEmployee(name, email, joinYear) {
    const newEmployee = {
        name: name,
        email: email,
        joinYear: joinYear,
    };
    employees.push(newEmployee);
}

addEmployee('Bagas', 'Bagas@gmail.com', 2024);

console.log(employees);