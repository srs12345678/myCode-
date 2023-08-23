//--- curent price 
const electst = document.getElementById('electSt')// curent price electr
const voterst = document.getElementById('voterSt')// curent price 
const voterHSt = document.getElementById('voterHSt')// curent price
const interSt = document.getElementById('interSt')// curent price 
const musorSt = document.getElementById('musorSt')// curent price
const otop = document.getElementById('otoplen')// curent price
// btm
const submitTr = document.getElementById('submitTarif')


submitTr.onclick = ()=> {
    let price = [electst.value, voterst.value, voterHSt.value, interSt.value,musorSt.value,otop.value] 
    localStorage.setItem('curPrice',JSON.stringify(price))
     
    }
 
    {oldVal5,elecPred5,dataPred5,votPred5,votGorPred5,intPred5,musPred5,otopPred5,daPrPred5 }

