
//_____________________ operator ...  ( split object on setting)
const button = {
   color: 'red',
   text:  'hi',
}
//{color: 'red', text: 'hi'}

const buttonNew = {
    ...button, c: 2  // .... before object 

}
// {"color": "red","text": "hi","c": 2}

//__________________ connection object use ...


const button1 = {
    color: 'red',
    text:  'hi',
}

const button2 = {
    color: 'grin',
    text1:  'hi',
}

const allButtom = {
    ...button1,
    ...button2
}
// {color: 'grin', text: 'hi', text1: 'hi'}

 //------------------------- Concatination string
 
 const user  = {
    name: 'roman',
    city: 'sevas',
    lang: 'ru',
 }

 const userInfo =  `Hi. My name ${user.name}, i live in ${user.city} my languech is ${user.lang} `
// IMPOTENT -  `` this simbol ,   is not '' 


//__________________________     =>  function


const myFunction = (a, b) => {
   let c = a+b
    return c
}

console.log (myFunction(10,5))  /// variable a is name =>function...myFunction ( a, b)

 
setTimeout(()=>{  // use => fubction  () =>{}
    console.log("hi hi hi"),1000 
} )
// varius shot => function ,.. if have 1 parameter, :  a=>{} 
// varius shot => function ,.. 

 

const multByNumber = function(value, number = 1) {
    return value * number
}
//multByNumber(10)   --- 1
//multByNumber(10,10)  ---100

const multByNumber1 = (value, number = 1) =>{
    return value * number
}
//or
const multByNumber2 = (value, number = 1) => value * number

// parametr function defoult
const post = {
    autor:' not ',
    id:1  ,
}

const newPost = (autorName,addDate = Date()) => // use ({  })
    ({  
    ...post,
    addDate:addDate,
    autor: autorName,
})

//------------------------------flow control 

// ------if ( условие ) { блок кода , выполняемые однократно , если условие правдиво }
let val =10
if (val > 5){
    val += 20
}


const person = {
    age: '35' , 
}

if (!person.name){
    console.log('name not defined')
}






function chek (a,b){
    c= 20
    if (a==b) { return " yes"} 
    if (a+b == c ) {return " most"}
                     { return 'no'}  
}

const chekChek= (a,b)=>{
c= 20
if (a==b) { return " yes"} 
if (a+b == c ) {return " most"}
                 { return 'no'}  
}



//----- if(){} else {}
let val1 = 11
    if (val1 > 5){ val1 += 20}
            else{val1 -= 20}

            
// -----------if , else if 
const dddd = (val11) => {
    if (val11 == 5)  { { val11 += 20} console.log(val11)}
    else   {console.log("noooooooo")}
}

const qqqq = (val11) => {
    if (val11 == 5)  {{ val11 += 20} console.log(val11)}
    else if (val11 == 10)  {{console.log("noooooooo")}}
    else                   {console.log('booom '+ (val11))}

}
const tttt = (val11) => {
    if (val11 === 5 )  {{console.log("noooooooo")}}
    if (val11 == 5)  {{ val11 += 20} console.log(val11)}
    else                   {console.log('booom '+ (val11))}

}

const age = 11
if (age>18){console.log("взрослый")}
else if (age >= 12 ) {console.log("подросток")}
else {console.log("ребенок")}


const sumPositivNum = (a,b) =>{
    if (typeof a !== 'number'|| typeof b !== 'number' ){return 'one of the argument not a number'}
    if (a <= 0|| b <=0 ){return 'one of the argument not a positive'}
     else {return a+b }
}
// -------------while ------- (исполняется пока услувие правдиво )
// модет не выполниться не разу  если услоывие ложное 
let q = 1
while (q < 10) {
    console.log(q) 
    q++     // увиличивает значение на +1.. без этого параметра цикл зависнит 
} 

//--------------------- do while 
//выполнится хотя бы 1 раз 
//do{}
//while(){}
console.log('do while')

 let doWhile = 5
 do{console.log(doWhile) // do делаем эту инструкцию , пока не наступпи условие while 
     doWhile++
    }
 while(doWhile < 10) 
//-------------------

 function write() {
    let qery = window.location.search;
    let par = new URLSearchParams(qery);
  
    for (const [key, value] of par.entries()){
      console.log(key, ':', value);
      let tr = document.querySelector('tr');
      tr.childNodes[3].innerHTML = value;
    }
  }








