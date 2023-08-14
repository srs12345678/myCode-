//______________________----array

const arr = [1,2,3]
//or
const arr1 = new Array (1,2,3)

const arr2 = [1,2,3]

console.log(arr)  //Array(3) [ 1, 2, 3 ]
console.log(arr[1]) // 2

//------- edite value array

const arr3 = [1,2,3]//Array(3) [ 1, 2, 3 ]
console.log(arr3)
arr3[1] = 'roman'
console.log(arr3) //Array(3) [ 1, "roman", 3 ]


// -- push  ,added element in end array  
arr3.push(4)
console.log(arr3) //.Array(4) [ 1, "roman", 3, 4 ]

// pop , deleted finish element in array\
arr3.pop() // without element inside ()
console.log(arr3) //.Array(4) [ 1, "roman", 3, ]

// pop return element in const
const returnElement =  arr3.pop()
console.log(arr3) //.Array(4) [ 1, "roman" ]
console.log(returnElement) // 3   this is element who was deleted in arr3

//unshift . added element in beggin array
const arr4 = [1,2,3] //Array(3) [ 1, 2, 3 ]
arr4.unshift('roman')
console.log(arr4) //.Array(4) [ "roman", 1, 2, 3 ]
arr4.unshift('lyuba')
console.log(arr4) //.Array(4) [ "lyuba", "roman", 1, 2, 3 ]

//shift , deleted first element
arr4.shift()
console.log(arr4) //.Array(4) [ "roman", 1, 2, 3 ]
//shift, return deleted  element
const returnElementShift = arr4.shift()
console.log(arr4) //.Array(4) [ 1, 2, 3 ]
console.log(returnElementShift) //.Array(4) [ "roman",] this is element who was deleted in arr4

// IMPOTENT . pop push shift unshift --  mutation original array 

//-------- forEach

const arr5 = [1,2,3] //Array(3) [ 1, 2, 3 ]
arr5.forEach(elemen=>console.log(elemen*2))  // new fuction name element who call cancole.log evry element*2
// 2 
// 4
// 6

//-----  map   - creat new array and return all element array

const arr6 = [1,2,3] //Array(3) [ 1, 2, 3 ]

const newArr6 = arr6.map(el=>el*3)   
//or
const newArr7 = arr6.map((el)=>{
    return el *3
})  

console.log(newArr6) //Array(3)  [ 3, 6, 9 ]
console.log(newArr7) //Array(3) [ 3, 6, 9 ]










































