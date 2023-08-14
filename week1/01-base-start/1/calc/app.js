//_________________________________RomanSh___________________________ 

/*
let num = 42 // number
let firsName = 'Roman' // string
let secondName = "Sh" 
const isProgramer = true
const fullName = firsName + " " +  secondName






//alert(firsName)  // for show alert 
 //isProgramer = false // erore 

/*fgdhfdghdf
*/
//can do
/* 
let $ = "тест"
let $num = 1
let num$ = 2
let _ = 3
let _num = 3
let num_ = 3
let myNum = 3
let num32 =  32
let num22 = num + num32 + myNum
jj = (555555 +2) *2 



console.log("test:", num, firsName)
console.log(num + num32 )
console.log(jj )
console.log( fullName )


console.log(num22, jj)


//restricted 
/*
let 42 = 232  //начало с цифр 
let const = 23 // use special word 
let my-num = 23  // use - 

*/
//console.log(input1.value, )
//console.log(input2.value, )
//console.log(resultElement.textContent)
//console.log(resultElement.textContent)





const resultElement = document.getElementById ( "result" )
const input1 = document.getElementById ( "input1" )
const input2 = document.getElementById ( "input2" )
const submitButn = document.getElementById ("submit")
const plus = document.getElementById ("plus")
const minus = document.getElementById ("minus")
const mult = document.getElementById ("mult")
const div = document.getElementById ("div")
let znak = '+'
let fff = ' Hello Гильерме  from Russia ' // for Brasil frends





plus.onclick = function () {
znak = '+'
}
minus.onclick = function () {
znak = '-'
}
mult.onclick = function () {
    znak = '*'
    }
    div.onclick = function () {
        znak = '/'
        }



submitButn.onclick = function () {
if (znak == '+') {
const sum = Number (input1.value) + Number (input2.value)
resultElement.textContent = sum

} 

else if (znak == '-') {
const sum = Number (input1.value) - Number (input2.value)
if ( sum < 0 ){
  resultElement.style.color = 'red'  
}
resultElement.textContent = sum
}

else if (znak == '*') {
    const sum = Number (input1.value) * Number (input2.value)
    resultElement.textContent = sum
    
}

else if (znak == '/') {
        const sum = Number (input1.value) / Number (input2.value)
        
        resultElement.textContent = sum       
}
alert( fff ) 
}

























