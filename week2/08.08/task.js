/*
const nameMant = [0,'jan', 'feb', 'match', 'apr', 'may', 'june', 'julay', 'agust', 'september', 'october', 'november', 'desember' ]
const numMant = [1,2,3,4,5,6,7,8,9,10,11,12 ]
let x

const manth=(x) => {
   
    console.log(nameMant[x])

}
//manth(3)


const tovar1 = ['woter', 1000,150 ] 
const tovar2 = ['hany', 5005,150]
let delivery = 150

const allPriceWithautDel=tovar1[1] + tovar2[1]
const allPriceWithDel=tovar1[1] + tovar2[1]+tovar1[2] + tovar2[2]   
console.log('price item whith delivey '+allPriceWithDel +','+ 'price item whithout delivey '+allPriceWithautDel )

//console.log(tovar1.length)

const arR = [4,1,2,5,6,78,66]

let q = Math.min(...arR)
let w = Math.max(...arR)

console.log('min #'+ q+ ","+'max #'+ w)


console.log(arR.toString());


//---------
arR.sort((a, b) => a - b)
console.log(arR) // 1,  2,  4, 5,6, 66, 78

arR.sort((a, b) => b - a)
console.log(arR)//  78, 66, 6, 5,4,  2, 1


const obj = {
    'Минск': 'Беларусь',
    'Москва': 'Россия',
    'Киев': 'Украина'
};
// for(let key in obj  ){ }  - операция с каждым элементом объекта 
console.log(obj)
for(let key in obj){
    console.log(`город ${key} столица   ${obj[key]}`)  // операция с каждым элементом объекта 
}

// forEach операция с каждым элементом масива 
const arR1 = [4,1,2,5,6,78,66]

arR1.forEach(element => {console.log(element*element)
    
});

const numMant1 = [1,2,3,4,5,6,7,8,9,10,11,12 ]
let aa
 numMant1.toString 
console.log(numMant1.toString )


const arR11 = [2/6,4,1,2,5,3,6,77,78,66]
let  xx = 2
// nowing that is number celor 
arR11.forEach(element => {
    if (Number.isInteger(element/xx)==true) {console.log ( element )}});

// how many ersago, father was older, son in 2 time
    const oldYearsSon = 35
    const oldYearsFather = 59

    //const betwin = ()=>{
      let xxx = (oldYearsFather - (oldYearsFather - oldYearsSon))
        console.log(xxx+' лет назад Отец был в 2 раза старше')
    //}


    //---------------------------------------------------
// tasck about positive number and chetnoe and at last 50
let atLast = 50
    const arR111 = [-2,-3,4,1,2,5,3,6,77,78,66]
    arR111.forEach(element => {
        if ( element%2 == 0&& element >= 0 && element < 50 ) { console.log(element)}})


arR111.map(element => {'#'+console.log(element)})


//tacsk ----------while , for  

let arR222= (i)=> {
    i = 1
    while ( i <= 50&& i  ) {console.log(i),i++}}
    
     arR222()

*/

letlet=(i)=>{
do {i++ 
   console.log(i)}
     while (i<50)
}


letlet1=(i)=>{
    let r
    do {r = i/letlet(1)
       console.log(i)}
         while (r == 50)
}
letlet1(10)