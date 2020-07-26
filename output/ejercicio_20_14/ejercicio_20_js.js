"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(pgGen);

//Destructing Objets and array ECMACS 6 ES6

/* const output=document.getElementById('output');
let person={ firstname:"Jency", lastname:"Roca"};
console.log(person); 

let {firstname, lastname}=person; 
console.log(firstname); 
console.log(lastname); 

let myArray= ["Javascript", "JS", "JS6", "ECMA"]; 
console.log(myArray); 

let [a,b,c,d,e="Java"]=myArray; 
console.log(a); 
console.log(b); 
console.log(c); 
console.log(d); 
console.log(e);  */
//generate iterators
function pgGen() {
  var counter;
  return regeneratorRuntime.wrap(function pgGen$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          counter = 0;

        case 1:
          if (!(counter < 20)) {
            _context.next = 6;
            break;
          }

          _context.next = 4;
          return counter++;

        case 4:
          _context.next = 1;
          break;

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var pg = pgGen();

for (var i = 0; i < 10; i++) {
  var holder = pg.next();

  if (holder.done) {
    break;
  }

  console.log(holder.value); // console.log(holder.done); 
}

console.log(pg);
console.log(pg.next());
console.log(pg.next());
console.log(pg.next());
console.log(pg.next());
console.log(pg.next()); /// Sets and Data Structure

var testSet = Object.create(null);
testSet.id = 0;
testSet[10] = "Hello Word";

if (testSet.id) {
  console.log("its there");
} else {
  console.log("not there");
}

console.log(testSet['10']);
var a = null;
var b = null;
testSet[a] = "Whetever";
console.log(testSet[b]);
var testSet2 = new Set();
testSet2.add("Hello Word 0");
testSet2.add("Hello Word 1");
testSet2.add("Hello Word 2");
testSet2.add("Hello word 3");
console.log(testSet2); //testSet2.delete("Hello Word 0"); 

testSet2.forEach(function (value, key) {
  console.log(key + "-" + value);
});
var myArray1 = [1, 4, 6, 3, 6, 644, 23, 32, 2, 3, 4, 5, 6, 7, 87, 2, 3, 4, 3, 43, 33];
console.log(myArray1);

function removeDup(a) {
  return _toConsumableArray(new Set(a));
}

console.log(removeDup(myArray1)); //ejercicio 22 map///////////////////

var mapArray1 = myArray1.map(function (a) {
  return a *= 10;
});
console.log(mapArray1);
var mapArray12 = new Map();
mapArray12.set("hello Word");
mapArray12.set("myName", "Laurance");
mapArray12.set("Hello", "Word");
mapArray12.set("myName", "LaURANCE");
console.log(mapArray12);
console.log(mapArray12.size);
console.log(mapArray12.has("world"));
console.log(mapArray12.get("Hello"));
var items = [{
  name: 'iPhone',
  details: 'White',
  cost: 5000
}, {
  name: 'iPad',
  details: 'White',
  cost: 8000
}, {
  name: 'Cable',
  details: '3 foot',
  cost: 1000
}, {
  name: 'Camera',
  details: '25MP',
  cost: 30000
}, {
  name: 'Laptod',
  details: 'intel i7',
  cost: 120000
}, {
  name: 'TV',
  details: '50 inch',
  cost: 4500
}];
console.log(items);
var holder1 = items.map(function (items) {
  return items.name;
});
console.log(holder1);
var hcost = items.map(function (items) {
  return items.cost;
});
console.log(hcost); //arrow funtion

var holderName = items.map(function (items) {
  return items.name;
});
var holderCost = items.map(function (items) {
  return items.cost;
});
console.log(holderName);
console.log(holderCost);
var arrayNum = [2, 5, 7, 89, 32, 3, 23, 2, 23, 55];
var a1 = arrayNum.find(function (x) {
  return x > 50;
});
var b1 = arrayNum.find(function (x) {
  return x > 50;
});
console.log(a1);
var c1 = arrayNum.findIndex(function (x) {
  return x > 50;
});
console.log(c1);
console.log(arrayNum[arrayNum.findIndex(function (x) {
  return x > 50;
})]);

function makeArray() {
  console.log(arguments);
  return Array.from(arguments);
}

var d = makeArray("tes", "test2", "test3");
console.log(d);
console.log(d.findIndex(function (ax) {
  return ax = "test";
}));