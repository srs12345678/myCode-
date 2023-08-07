/* const objektA = {a: 1, b: 11
}

const objektB = objektA
objektB.c = 10
objektB.a = 11


console.log( objektB.b )

function a() {
    console.log ( 'Hi Roman ' )
}
*/
/*


 const myCity = {
    city: 'Sevas',
    cantry: 'Ru',
    nativ: true
}


myCity.city = 'anapa'
myCity.languech = 'russian'



console.log( myCity)

 //const asd = asd

// asd = asdf // erorre value not link {}
// impotent ,  couse const it is link{ } ? we can cange value ,
// but if canst = not link , sistem not agree change value 

delete myCity.city  // operator delete - deliting options
console.log(myCity)

myCity['CITY'] = 'MOSCOW'

console.log(myCity)


const myTown = {
    city: 'sevas',
    region: {   //seting inside  ferst siting 
         ferst: 'Crimia',
         second: 'GFZ'
    }
}
 console.log(myTown)

 // [ myTown.city ]  say our about . need use options 'sevas'
 
 
 //exempl
  //delete myTown.region['second']

  console.log(myTown)
*/

  //-------------------------JSON--------------
/*
  const cons =  {
    age: 35,
    fillAge:25
  }


  console.log( cons )


  JSON.stringify(cons) 
*/
  //_________________-mutation in js


  //------- funktion 
/*
  function myFn(a,b) { // не задали параметры аргументам а и б 
    let c
    a = a+1
    c = a+b
    return c
  }

  myFn(10,3)  // (value a /  b  )   

  let aa = myFn(11,3)

  console.log(  aa )  

*/


//------collback

/*
function printMyName() {
    console.log('Rom')
}
console.log( 'Start')
setTimeout (printMyName, 1000)


*/

// ---- global and local area vision 
let a
let b // global area 

function myFn(a, b){
   let a = 10
   let b = 11
   return b

}

console.log(a)
console.log(myFn)





































