
//-----
const numRum = document.getElementById('numRum')// num room
const date = document.getElementById('date')// curent data
const dateOld = document.getElementById('dateOld')// old Date 
const elect = document.getElementById('elect')// curent value electrica
const voter = document.getElementById('voter')// curent value cold water
const voterH = document.getElementById('voterH')//// curent value hot water


//checked
const internet = document.getElementById('internet')// curent value add internet
const Otoplenie = document.getElementById('Otoplenie')// curent value add warm
const Musor = document.getElementById('Musor')// curent value add trash
// - buttom
const submit = document.getElementById('submit') // link with but submit
const tarifBtn = document.getElementById('tarifBtn') // link with but submit

// curent price
const curentTarifShow = document.getElementById('curentTarifShow')
const curentTarifShowPars = JSON.parse(localStorage.getItem(`curPrice`))
//----- for copyToBak
  let xxx 
  let xyx
  let yyy
  let valueAll
  let nf
//  show current tarif
let curentTarifSh=()=>{
  if(curentTarifShowPars !== null){
    curentTarifShow.textContent= `элект.: ${curentTarifShowPars[0]} руб., хв.: ${curentTarifShowPars[1]} руб., гв.: ${curentTarifShowPars[2]} руб., `
  return
  }
  curentTarifShow.textContent='тарифы отсутсвуют'
}
curentTarifSh() // call () show tarifs


tarifBtn.onclick =()=>{  
  window.location.href=`tarifi.html`
}

submit.onclick = () => {  
    if (numRum.value==""){   // chek  number 
      document.getElementById('numRum').style.backgroundColor='red'// painting btn in red
      alert("введите номер квартиры ")
      return
      }

      if (dateOld.value==""){   // chek date
        document.getElementById('dateOld').style.backgroundColor='red'// painting btn in red
        alert("введите дату")
        return
        }

      if(curentTarifShowPars==null){
        document.getElementById('tarifBtn').style.backgroundColor='red'// painting btn in red
        alert("тарифы не заданы")
      return
      }
    // add +  int trash warm

  let addInter
  let addOtop
  let addTrash
   if (internet.checked){addInter =1}else {addInter =0}
   if (Otoplenie.checked){addOtop =1}else {addOtop =0}
   if (Musor.checked){addTrash =1}else {addTrash =0}
   
   //--- calculated days 
   let date1 = new Date(date.value);
 let date2 = new Date(dateOld.value );
 let timeDiff = Math.abs(date2.getTime() - date1.getTime());
 let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
 
 //alert(diffDays);
 
   //-------- chec corect 
   
   let chekCorect = confirm(`данные коректны? Дата: ${date.value}, предыдущая дата:${dateOld.value}, елект.: ${elect.value}, хв.: ${voter.value}, гв.: ${voterH.value}, полный месяц: ${diffDays} дней  `   );
  
   valueAll = [date.value,elect.value,voter.value, voterH.value,addInter,addOtop,addTrash,diffDays,dateOld.value ]
   nf=numRum.value;   
   localStorage.setItem('curDate',JSON.stringify( date.value) )

   //copyToBak()
   //6 manth ago
   let oldData5= localStorage.getItem(`Room${nf}_bak4`)
   localStorage.setItem( `Room${nf}_bak5`,oldData5)
   //5 manth ago
   let oldData4= localStorage.getItem(`Room${nf}_bak3`)
   localStorage.setItem( `Room${nf}_bak4`,oldData4)
   //4 manth ago
   let oldData3= localStorage.getItem(`Room${nf}_bak2`)
   localStorage.setItem( `Room${nf}_bak3`,oldData3)
   //3 manth ago
   let oldData2= localStorage.getItem(`Room${nf}_bak1`)
   localStorage.setItem( `Room${nf}_bak2`,oldData2)
   //2 manthAgo
   let oldData1= localStorage.getItem(`Room${nf}_bak`)
   localStorage.setItem( `Room${nf}_bak1`,oldData1)
   // 1manthAgo
   let oldData= localStorage.getItem(`Room${nf}`)
   localStorage.setItem( `Room${nf}_bak`,oldData) 
   // writeValue
   localStorage.setItem(`Room${nf}`,JSON.stringify(valueAll))
   
   if (chekCorect==true){
     window.location.href=`result.html?num=${nf}` // say second page about chose number room
    }
    return;    
}


  
   
