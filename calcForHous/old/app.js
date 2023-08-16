
const numRum = document.getElementById('numRum')// num room
const date = document.getElementById('date')// curent data
const elect = document.getElementById('elect')// curent value electrica
const voter = document.getElementById('voter')// curent value cold water
const voterH = document.getElementById('voterH')//// curent value hot water
const numDay = document.getElementById('numDay')//// curent value hot water

//checked
const internet = document.getElementById('internet')// curent value add internet
const Otoplenie = document.getElementById('Otoplenie')// curent value add warm
const Musor = document.getElementById('Musor')// curent value add trash
// - buttom
const submit = document.getElementById('submit') // link with but submit
const tarifBtn = document.getElementById('tarifBtn') // link with but submit

// curent price
const curentTarifShow = document.getElementById('curentTarifShow')
let curentTarifShowPars = JSON.parse(localStorage.getItem(`curPrice`))

//  show current tarif
let curentTarifSh=()=>{
  if(curentTarifShowPars !== null){
    curentTarifShow.textContent= `элект.: ${curentTarifShowPars[0]} руб., хв.: ${curentTarifShowPars[1]} руб., гв.: ${curentTarifShowPars[2]} руб., `
  }
  curentTarifShow.textContent='тарифы отсутсвуют'
  return
}
curentTarifSh() // call () show tarifs


tarifBtn.onclick=()=>{  // add tarif
  /*
if (date.value==""){
alert("введите дату")
} else {
  */
  window.location.href=`tarifi.html`
}


submit.onclick = () => {  
  if (date.value==""){   // chek date
    alert("введите дату")
    return
    }
  {
  let addInter
  let addOtop
  let addTrash

   if (internet.checked){addInter =1}else {addInter =0}
   if (Otoplenie.checked){addOtop =1}else {addOtop =0}
   if (Musor.checked){addTrash =1}else {addTrash =0}



  let nf=numRum.value;
   localStorage.setItem('curDate',JSON.stringify( date.value) )
    localStorage.setItem( `Room${nf}_bak`, localStorage.getItem(`Room${nf}`));
    let valueAll = [date.value,elect.value,voter.value, voterH.value,addInter,addOtop,addTrash,numDay.value ]
    localStorage.setItem(`Room${nf}`,JSON.stringify(valueAll))
    
    let chekCorect = confirm(`данные коректны? Дата: ${date.value}, елект.: ${elect.value}, хв.: ${voter.value}, гв.: ${voterH.value}, полный месяц: ${numDay.value} дней  `   );
    if (chekCorect==true){
      window.location.href=`result.html?num=${nf}` // say second page about chose number room
    }
    
    return;    
}}



