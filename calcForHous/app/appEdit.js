
const date = document.getElementById('date')
const elect = document.getElementById('elect')
const voter = document.getElementById('voter')
const voterH = document.getElementById('voterH')
const inter = document.getElementById('inter')
const trash = document.getElementById('trash')
const warm = document.getElementById('warm')
const numDay = document.getElementById('numDay')

const submit = document.getElementById('submit')

let url = new URL(window.location);
let num = url.searchParams.get("num");

// -----------
retIfDefind=()=>{//  return if array == null
    console.log(JSON.parse(localStorage.getItem(`Room${num}`)) == null)
   
    if(JSON.parse(localStorage.getItem(`Room${num}`)) == null)
    {
        alert('данные отсутствуют')
        window.location.href=`pred.html`
    }
    
}
retIfDefind()
//-------------
let valueDate = JSON.parse(localStorage.getItem(`Room${num}`))
const showPars = JSON.parse(localStorage.getItem(`Room${num}`))
//JSON.stringify(


showValue=()=>{
date.value=showPars[0]
elect.value=showPars[1]
voter.value=showPars[2]
voterH.value=showPars[3]
inter.value=showPars[4]
trash.value=showPars[5]
warm.value=showPars[6]
console.log(showPars)
}

showValue()


submit.onclick=()=>{
    let chekCorect = confirm(`данные коректны? Дата: ${date.value}, елект.: ${elect.value}, хв.: ${voter.value}, гв.: ${voterH.value}, полный месяц: ${numDay.value} дней  `   );
    if(chekCorect==false){
        console.log('отмена')
        return
    }
   valueDate =[date.value,elect.value,voter.value,voterH.value,inter.value,trash.value,warm.value,numDay.value]
   console.log(valueDate)
   localStorage.setItem(`Room${num}`,JSON.stringify(valueDate))
   window.location.href=`pred.html`
   // console.log(showPars)
}
