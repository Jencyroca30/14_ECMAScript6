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
/* function *  pgGen() {
    let counter = 0; 
    while (counter<20) {
        yield counter++;
        
    }
}
let pg= pgGen();

for (let i = 0; i < 10; i++) {
     let holder= pg.next(); 
     if (holder.done){ break;}
         console.log(holder.value); 
        // console.log(holder.done); 
    
    
}
console.log(pg);
console.log(pg.next());
console.log(pg.next());
console.log(pg.next());
console.log(pg.next());
console.log(pg.next()); 

/// Sets and Data Structure

let testSet= Object.create(null);
testSet.id=0; 
testSet[10]="Hello Word"; 
if (testSet.id) {
    console.log("its there"); 
}else{
    console.log("not there");
}
console.log(testSet['10']);
let a= null; 
let b=null; 
testSet[a]="Whetever";
console.log(testSet[b]);

let testSet2=new Set(); 
testSet2.add("Hello Word 0"); 
testSet2.add("Hello Word 1"); 
testSet2.add("Hello Word 2"); 
testSet2.add("Hello word 3");  
console.log(testSet2); 
//testSet2.delete("Hello Word 0"); 

testSet2.forEach(function(value,key){
    console.log(key+"-"+value)
    
});


let myArray1= [1,4,6,3,6,644,23,32,2,3,4,5,6,7,87,2,3,4,3,43,33];
console.log(myArray1); 

function removeDup(a) {
    return[...new Set(a)];   
}
console.log(removeDup(myArray1)); 


//ejercicio 22 map///////////////////

let mapArray1= myArray1.map(function (a) {
return a *=10;   
})

console.log(mapArray1); 


let mapArray12=new Map(); 
mapArray12.set("hello Word"); 
mapArray12.set("myName", "Laurance"); 
mapArray12.set("Hello", "Word"); 
mapArray12.set("myName", "LaURANCE")
console.log(mapArray12); 
console.log(mapArray12.size);
console.log(mapArray12.has("world")); 
console.log(mapArray12.get("Hello")); 


let items=[{
    name: 'iPhone',
    details: 'White',
    cost:5000
},
{
    name: 'iPad',
    details: 'White',
    cost: 8000
},
{
    name: 'Cable',
    details: '3 foot',
    cost: 1000
},
{
    name:'Camera',
    details: '25MP',
    cost: 30000
},
{
name: 'Laptod',
details: 'intel i7',
cost: 120000
},
{
    name: 'TV', 
    details: '50 inch', 
    cost: 4500
}]; 
console.log(items); 
let holder1=items.map(function (items) {
    return items.name
    
}); 

console.log(holder1); 

let hcost=items.map(function (items) {
    return items.cost; 
    
});
console.log(hcost); 

//arrow funtion

let holderName=items.map(items=>items.name)
let holderCost=items.map(items=>items.cost)
console.log(holderName); 
console.log(holderCost); 

let arrayNum=[2,5,7,89,32,3,23,2,23,55]
let a1= arrayNum.find(function (x) {
    return x>50; 
    
})

let b1 =arrayNum.find(x =>x>50)
console.log(a1);


let c1= arrayNum.findIndex(x=>x>50); 
console.log(c1); 
console.log(arrayNum[arrayNum.findIndex(x=>x>50)]); 



/////32 Source Array/////////////
function makeArray() {
    console.log(arguments); 
    return Array.from(arguments); 
    
}

let d= makeArray ("tes", "test2", "test3"); 
console.log(d); 

console.log(d.findIndex(ax=>ax="test"));  


let test=d.entries(); 
console.log(test); 
console.log(test.next()); 
let tes1=[...test]; 
console.log(tes1); 

let mySet=new Set(["tes0", "test1", "test2", "test3", "JavaScript", "js6", "hellio", "word"]); 
console.log(mySet); 
let myArray=Array.from(mySet); 
console.log(myArray); 

console.log(myArray.copyWithin(4,1))
console.log(myArray.fill("Jency"))*/


///32 Constructor Class/////////////

class MakeName{
    constructor(firts, last){
        this.firtsName=firts; 
        this.lastName=last; 
    }
    completeName(){
        console.log(this); 
        console.log(this.firtsName+"-"+this.lastName); 
    }
}


let friend= new MakeName("Aaron", "Romero"); 

friend.completeName(); 