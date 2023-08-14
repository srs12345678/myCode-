// деструктуризация обеката , 
// const xxx= ( {  impotent , say about use value object  }  )

const user = {
    nameUser:'Iavan',
    coments:1,
    qvontytyMantv:10,
}
const user1 = {
    nameUser:'Roma',
    
    qvontytyMantv:10,
}

const show =({nameUser, qvontytyMantv, coments})=>{ // see funktion about vaiable in funktion 

    if (!coments){ // if not had coments in object {user }
        return `User ${nameUser}, has not comments`
    }
    return `User ${nameUser}, has  comments ${coments} `
}

console.log(show (user) )
console.log(show (user1) )



// -------------------------------------------switch 


const num  = (num1)=>{
switch (num1) {
    case 1: // if (num 1) == 1 , start  console.log ('это мало')
    console.log ('это мало')
        break

        case  2: // if (num 1) == 2 , start  console.log ('это средне ')
            console.log ('это средне ')
        break

        case 1: 
        console.log ( 'это много ')
        break

    default: console.log ('это не то ') // if (num 1 ) ==  another , show ('это не то ')


}
}

//----------------------Тернарный оператор 


let value = 5
console.log(value>=5?'хрень':'не хрень')
//or 
const inh = value >= 5?value +10:value *0
console.log(inh)


let num1 = 5
let res= num1 >=5?1:2
console.log(res)



 
//-------------forEach , key & value

const myO ={
    a:10,
    b: "roman",
    c: true,
}

Object.keys(myO).forEach(key=>{  // create funktion, that take value 
                                 // (Object.keys(myO))  in key 
   console.log(key,myO[key])
})

Object.keys(myO).forEach(key=>{  // create funktion, that take value 
    // (Object.keys(myO))  in key 
console.log(key,myO[key])
})



console.log(Object.keys(myO))   //'a', 'b', 'c' -   keys from from {my0}
console.log(Object.values(myO)) //10, 'roman', true -   value from from {my0}


//----------------------------- for , in 

const ar = {
    a:1,
    b:2,
    c:3,
}
for (const key in ar) {
        console.log(ar[key])    
    }
 /*
1
2
3
 */   

// __________________--- for of 

const myO1 = 'sdgdsfg'
for (const iterator  of myO1) {
    console.log(itjserator)
}
/*
s
d
g
d
s
f
g
*/

//------------ modul , import  and export 

export default myO1



  






