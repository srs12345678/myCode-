const numRum = document.getElementById('numRum')// num room
const date = document.getElementById('date')// curent data
const elect = document.getElementById('elect')// curent value electrica
const voter = document.getElementById('voter')// curent value cold water
const voterH = document.getElementById('voterH')//// curent value hot water
const internet = document.getElementById('internet')// curent value add internet
const Otoplenie = document.getElementById('Otoplenie')// curent value add warm
const Musor = document.getElementById('Musor')// curent value add trash

// - buttom
const submit = document.getElementById('submit') // link with but submit




//add data in lh
submit.onclick = ()=> {
   let nf =  numRum.value
   // save old value 
   localStorage.setItem(`data${nf}_Old`, localStorage.getItem(`Data${nf}`))
   localStorage.setItem(`elect${nf}_Old`, localStorage.getItem(`elect${nf}`))
   localStorage.setItem(`voter${nf}_Old`, localStorage.getItem(`voter${nf}`))
   localStorage.setItem(`voterH${nf}_Old`, localStorage.getItem(`voterH${nf}`))
   // save new  value
   localStorage.setItem(`data${nf}`, date.value)
   localStorage.setItem(`elect${nf}`, elect.value)
   localStorage.setItem(`voter${nf}`, voter.value)
   localStorage.setItem(`voterH${nf}`, voterH.value)
   window.location.href = `./result.html`
   

}
