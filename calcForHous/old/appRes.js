let url = new URL(window.location);
    let num = url.searchParams.get("num");
    let dateRet = url.searchParams.get("dateR");
    

const resultNumRoom = document.getElementById('resultNumRoom')// num room
//const resultDate = document.getElementById('resultData')//  deleted <p> Дата :  <class="mb-0" id="resultData">49</p>
const info = document.getElementById('info')// curent date in locst..

//--------------------

// --- calc price and show 
const resultEl = document.getElementById('resultEl')// calc  electr
const resultHv = document.getElementById('resultHv')// calc cold water
const resultGv = document.getElementById('resultGv')// calc hat water
const resultIntern = document.getElementById('resultIntern')// calc  internet
const resultMusor = document.getElementById('resultMusor')// calc trash
const resultOtop = document.getElementById('resultOtop')// calc  warm
const summaAll = document.getElementById('summaAll')// calc
//second pilin
const resultElRez = document.getElementById('resultElRez')// calc
const resultHvRez = document.getElementById('resultHvRez')// calc
const resultGvRez = document.getElementById('resultGvRez')// calc
const resultInternRez = document.getElementById('resultInternRez')// calc
const resultMusorRez = document.getElementById('resultMusorRez')// calc
const resultOtopRez = document.getElementById('resultOtopRez')// calc
const summaAllRez = document.getElementById('summaAllRez')// calc




resultNumRoom.textContent=  num
//resultDate.textContent = localStorage.getItem('curDate')
info.textContent=`Дата ${localStorage.getItem('curDate')} . Квартира №  ${num}`


let ret = JSON.parse(localStorage.getItem(`Room${num}`))
let retOld = JSON.parse(localStorage.getItem(`Room${num}_bak`))
let tarif = JSON.parse(localStorage.getItem(`curPrice`))
//alert(ret)


   resultEl.textContent='текущ.: '+ret[1]+'; прош.: '+retOld[1]+' тариф: '+tarif[0]+'; разница :'+(ret[1]-retOld[1])
   resultElRez.textContent=(ret[1]-retOld[1])*tarif[0]+' руб.'
   resultHv.textContent='текущ.: '+ret[2]+' ; прош.: '+retOld[2]+' тариф: '+tarif[1]+'; разница :'+(ret[2]-retOld[2])
   resultHvRez.textContent=(ret[2]-retOld[2])*tarif[1]+' руб.'
   resultGv.textContent= 'текущ.: '+ret[3]+'; прош.: '+retOld[3]+' тариф: '+tarif[2]+'; разница :'+(ret[3]-retOld[3])
   resultGvRez.textContent=(ret[3]-retOld[3])*tarif[2]+' руб.'
  // resultIntern.textContent= 
   resultInternRez.textContent=tarif[3]*ret[4]/30*ret[7]+' руб.'
   //resultMusor.textContent= tarif[4]*ret[6]+' руб.'//6
   resultMusorRez.textContent=tarif[4]*ret[6]/30*ret[7]+' руб.'
   //resultOtop.textContent= tarif[5]*ret[5]+' руб.'//5
   resultOtopRez.textContent=tarif[5]*ret[5]/30*ret[7]+' руб.'
   //second pilon
   //summaAll.textContent= 
   summaAllRez.textContent= ((ret[1]-retOld[1])*tarif[0])+ ((ret[2]-retOld[2])*tarif[1])+((ret[3]-retOld[3])*tarif[2])+(tarif[3]*ret[4])+(tarif[4]*ret[6])+(tarif[5]*ret[5])+' руб.'



