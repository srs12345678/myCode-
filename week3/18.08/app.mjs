// --------import and export models


const summ = (sing,num1,num2)=>
{
    let x
if (sing=="+"){
  x=num1+num2
  console.log(x)
  return
}
if(sing=='-'){
    x=num1-num2
    console.log(x)
    return
}
if (sing=='*'){
    x=num1*num2
    console.log(x)
    return
}  
if (sing=='/'){
    x=num1/num2
    console.log(x)
    return
}
else{
    console.log('не арефмитический знак',x)
}
}



export {summ}     //1 way  
//export default summ  // or,  2 way 

//-------------------------------------------------------------------
    