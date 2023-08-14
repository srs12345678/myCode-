//--------------mutation frue link  by copy
/*
const person= {
    name: 'Roman',
    age: 35
}

const person2 = person
person.age = 20
console.log(person) // {name: 'Roman', age: 20}

// as fobiden mutation
const person22 = Object.assign({},person ) //Object.assign({},  ) allow  editing only copy 
person22.age = 33

console.log(person) //{name: 'Roman', age: 20}
console.log(person22) // {name: 'Roman', age: 33}

//or another way
const person222 = {...person } // easy way . use {... xxxxxx }
person222.age = 44

console.log(person)//{name: 'Roman', age: 20}
console.log(person222)// {name: 'Roman', age: 44}

// are another way fru JSON , ((BEST method))
// first take  person ond make JSON code  , mere edit JSON code and return in JS code
const person2222 = JSON.parse(JSON.stringify(person)) //JSON.parse(JSON.stringify(XXXX)) 
// 
person2222.age = 55
console.log(person)//{name: 'Roman', age: 20}
console.log(person2222)// {name: 'Roman', age: 55}
 
//_____________ funktion _______
// function this is block that  we can do many time
 
 function myFn (a, b) { // in () making and use variable only inside this is fonction  
    a=a+1
    c=a+b
    return c // all time finished funktion
 } 

a=10 // take value  for variable for fubktion 
b=10

const d = myFn(a, b)   // assing (prisvaevaem) variable value function


console.log(d)

console.log("----------------------")


// _____________callback funktion



 function cB(names, sName){
    console.log(names+' '+sName )

 }
 console.log(cB('Roman','Sh') )



  function showw (){
    cB(names, sName)

 }

 console.log(showw(1, 2) )
*/
/*
function sum(a, b) {
    return a + b;
  }
  
  let result = sum(1, 2)
  console.log( result ) // 3
  */

/*
  function cB(names, sName){
    console.log(names+' '+sName )
 }


  function show (a, b){
        a = names
      b= sName 
    cB(names, sName)

 }
a = "roman"
b= "sh"

 console.log(show(roman, b)) 

 

/*
  function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('А родители разрешили?');
    }
  }
  
  let age = prompt('Сколько вам лет?', 18);
  
  if ( checkAge(age) ) {
    alert( 'Доступ получен' );
  } else {
    alert( 'Доступ закрыт' );
  }
 

*/
 




/*

function swap(a, b) {
tmp = a;
a = b;
b = tmp;
  console.log(a,b);
}

function show(a, b){
  console.log(a,b);
  console.log(a,b);
  swap(a,b);
}

fname = 'Roman';
sname = 'Luba';

show(fname, sname);
show(fname, sname);
*/

function swap(first, second) {
  tmp = first;
  first = second;
  second = tmp;

  console.log(first, second);
  //console.log(a,b);
}

function show(a, b){
  console.log(a,b);
  swap(a,b);
  console.log(a,b);
  //console.log(first, second)
}

fname = 'Roman';
sname = 'Lub';

show(fname, sname);




  
