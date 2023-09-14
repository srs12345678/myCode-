//const b1=document.querySelector('.b-1');
const b1=document.getElementsByClassName('b-1');


b1[0].onclick=test;

// this - link on b1
function test(color){
    console.log('working',color)
    this.style.background=color
    }



// call  , say on this == (any)
//test.call(b1)

b1[1].onclick= function () {
    test.call(b1[0],'orange')          //  call say what mean this (b1[1])
    
}

//aply   , like on call but get value from array ['orange']

b1[1].onclick= function () {
    test.apply(b1[0],['orange'])          //  call say what mean this (b1[1])
    
}

//bind  mean 'связывать привязать связать'

let a=test.bind(b1[0],'orange')
let b=test.bind(b1[1],'red')


b1[0].onclick=a
b1[1].onclick=b


