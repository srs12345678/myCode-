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

   if (numRum.value =='1') {
   // save old value 
   localStorage.setItem('data1_Old', localStorage.getItem('Data1'))
   localStorage.setItem('elect1_Old', localStorage.getItem('elect1'))
   localStorage.setItem('voter1_Old', localStorage.getItem('voter1'))
   localStorage.setItem('voterH1_Old', localStorage.getItem('voterH1'))
   // save new  value
   localStorage.setItem('data1', date.value)
   localStorage.setItem('elect1', elect.value)
   localStorage.setItem('voter1', voter.value)
   localStorage.setItem('voterH1', voterH.value)
   window.location.href = './result.html'
   return
}
   if(numRum.value =='2') {
      // save old value 
   localStorage.setItem('data2_Old', localStorage.getItem('Data2'))
   localStorage.setItem('elect2_Old', localStorage.getItem('elect2'))
   localStorage.setItem('voter2_Old', localStorage.getItem('voter2'))
   localStorage.setItem('voterH2_Old', localStorage.getItem('voterH2'))
   // save new  value
      localStorage.setItem('data2', date.value)
      localStorage.setItem('elect2', elect.value)
      localStorage.setItem('voter2', voter.value)
      localStorage.setItem('voterH2', voterH.value)
      window.location.href = './result.html'
      return
}
   if(numRum.value =='3') {
      // save old value 
   localStorage.setItem('data3_Old', localStorage.getItem('Data3'))
   localStorage.setItem('elect3_Old', localStorage.getItem('elect3'))
   localStorage.setItem('voter3_Old', localStorage.getItem('voter3'))
   localStorage.setItem('voterH3_Old', localStorage.getItem('voterH3'))
   // save new  value
      localStorage.setItem('data3', date.value)
      localStorage.setItem('elect3', elect.value)
      localStorage.setItem('voter3', voter.value)
      localStorage.setItem('voterH3', voterH.value)
      window.location.href = './result.html'
      return
}
    if (numRum.value =='4') {
      // save old value 
   localStorage.setItem('data4_Old', localStorage.getItem('Data4'))
   localStorage.setItem('elect4_Old', localStorage.getItem('elect4'))
   localStorage.setItem('voter4_Old', localStorage.getItem('voter4'))
   localStorage.setItem('voterH4_Old', localStorage.getItem('voterH4'))
   // save new  value
      localStorage.setItem('data4', date.value)
      localStorage.setItem('elect4', elect.value)
      localStorage.setItem('voter4', voter.value)
      localStorage.setItem('voterH4', voterH.value)
      window.location.href = './result.html'
      return
   
}
    if (numRum.value =='5') {
   // save old value 
localStorage.setItem('data5_Old', localStorage.getItem('Data5'))
localStorage.setItem('elect5_Old', localStorage.getItem('elect5'))
localStorage.setItem('voter5_Old', localStorage.getItem('voter5'))
localStorage.setItem('voterH5_Old', localStorage.getItem('voterH5'))
// save new  value
   localStorage.setItem('data5', date.value)
   localStorage.setItem('elect5', elect.value)
   localStorage.setItem('voter5', voter.value)
   localStorage.setItem('voterH5', voterH.value)
   window.location.href = './result.html'
   return

}
}

