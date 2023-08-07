const numRum = document.getElementById('numRum')// num room
const date = document.getElementById('date')// curent data
const elect = document.getElementById('elect')// curent value electrica
const voter = document.getElementById('voter')// curent value cold water
const voterH = document.getElementById('voterH')//// curent value hot water
const internet = document.getElementById('internet')// curent value add internet
const Otoplenie = document.getElementById('Otoplenie')// curent value add warm
const Musor = document.getElementById('Musor')// curent value add trash
//--- curent price 
const electst = document.getElementById('electst')// curent price electr
const voterst = document.getElementById('voterst')// curent price 
const voterHSt = document.getElementById('voterHSt')// curent price
const interSt = document.getElementById('interSt')// curent price 
const musorSt = document.getElementById('musorSt')// curent price
// --- calc price and show 
const resultEl = document.getElementById('resultEl')// calc  electr
const resultHv = document.getElementById('resultHv')// calc cold water
const resultGv = document.getElementById('resultGv')// calc hat water
const resultIntern = document.getElementById('resultIntern')// calc  internet
const resultMusor = document.getElementById('resultMusor')// calc trash
const resultOtop = document.getElementById('resultOtop')// calc  warm
const summaAll = document.getElementById('summaAll')// calc
// - buttom
const submit = document.getElementById('submit') // link with but submi
let action
//wiev

const rum1 ={
    oldValue: {
        dat:'01.08.2000',
        valueElect:0,
        valueHotVot:0,
        valueColdVot:0,
        valueWarm: true,
        valueInternet:true,
        valueMusor:true
    }
    ,
    newValue: {
        dat:'06.08.2023',
        valueElect:0,
        valueHotVot:0,
        valueColdVot:0,
        valueWarm: true,
        valueInternet:true,
        valueMusor:true

    }

}

function add () {
   if (numRum.value == '1') {
new rum1.newValue.dat = String(date.value)

   }
   return rum1.newValue.dat
}

//submit.onclick = add ()

//------------------
const rum2 ={
    oldValue: {
        dat:'06.08.2023',
        valueElect:0,
        valueHotVot:0,
        valueColdVot:0,
        valueWarm: true,
        valueInternet:true,
        valueMusor:true
    }
    ,
    newValue: {
        dat:'06.08.2023',
        valueElect:0,
        valueHotVot:0,
        valueColdVot:0,
        valueWarm: true,
        valueInternet:true,
        valueMusor:true

    }

}

const rum3 ={
    oldValue: {
        dat:'06.08.2023',
        valueElect:0,
        valueHotVot:0,
        valueColdVot:0,
        valueWarm: true,
        valueInternet:true,
        valueMusor:true
    }
    ,
    newValue: {
        dat:'06.08.2023',
        valueElect:0,
        valueHotVot:0,
        valueColdVot:0,
        valueWarm: true,
        valueInternet:true,
        valueMusor:true

    }

}

const rum4 ={
    oldValue: {
        dat:'06.08.2023',
        valueElect:0,
        valueHotVot:0,
        valueColdVot:0,
        valueWarm: true,
        valueInternet:true,
        valueMusor:true
    }
    ,
    newValue: {
        dat:'06.08.2023',
        valueElect:0,
        valueHotVot:0,
        valueColdVot:0,
        valueWarm: true,
        valueInternet:true,
        valueMusor:true

    }

}

const rum5 ={
    oldValue: {
        dat:'06.08.2023',
        valueElect:0,
        valueHotVot:0,
        valueColdVot:0,
        valueWarm: true,
        valueInternet:true,
        valueMusor:true
    }
    ,
    newValue: {
        dat:'06.08.2023',
        valueElect:0,
        valueHotVot:0,
        valueColdVot:0,
        valueWarm: true,
        valueInternet:true,
        valueMusor:true

    }

}
