"use strict";

//Ejercicio 18 funcion =>
var output = document.getElementById('output');

var mes0 = function mes0(value) {
  var a = "Hello";
};

console.log('Tes 1'); //

var mes1 = function mes1(value) {
  return "Hello" + " " + value;
};

console.log(mes1('Test 2'));

var mes2 = function mes2(value) {
  console.log("Hello" + value);
};

mes2(" " + 'Test 2');

var mes3 = function mes3(value) {
  return console.log("Hello" + " " + value);
};

mes3('Test 3'); //Ejercicios del 1 al 15
//arguments.callee: No lo use: si está en un contexto estricto, solo arrojará errores
//ejercicio 15

/* function myFun() {
    let name = arguments.callee.name;
    for (let x = 0; x < arguments.length; x++) {
        console.log(name + "say this value" + arguments[x]);

    }
}
myFun(1, 2, 3);


//ejercicio14
const output = document.getElementById('output');

function outputMessage(message = "No value", b = show(message, "blank", "new")) {
    output.innerHTML = message;
}

function show() {
    console.log(arguments[0]);
} */
//ejercicio 13

/* function myFun(a, b, c, d, e) {
    if (arguments.length == arguments.callee.length) {
        console.log("okay");
    } else {
        console.log("Missing " + (arguments.callee.length - arguments.length));
    }
    console.log(arguments);
    console.log(arguments.length);
    console.log();
}
myFun(1, 2, 3); */

/* var a = "Hello Word    ";
let b = "jency coromoto";
const c = "Todo ";
let e = `More Lines   More Lines """''''''`;
 */

/* 
 

    function updateMessaje(p) {
        let message = `${p} was here today`;
        console.log(message);
        return message
    }
    //for pasado parametros a una variable

    for (let i = 0; i < 10; i++) {
        let message = `${i} count now`;
        console.log(message);

    }
    console.log(updateMessaje("Maria"));

 let name1 = "Laurence";
    name1 = "John";
    let message = `${name1} was here today`

 console.log(a.repeat(4));
    console.log(a.endsWith("He"));
    console.log(a.includes("Hello"));
    console.log(a.trim());
    console.log(e.length);
    console.log(message);
    console.log(b);
    console.log(c);

    for (let i = 0; i < 5; i++) {
        console.log(i);

    }

    const friend = {
        first: "Larry",
        lastName: "Svekis"
    };


    const myArray = [];

    for (let i = 0; i < 5; i++) {
        myArray.push(i);

    }
    console.log(friend);
    console.log(friend.lastName);
    console.log(friend.first);
    console.log(myArray); 

*/