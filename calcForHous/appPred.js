let oldVal1 = JSON.parse(localStorage.getItem(`Room1_bak`))
let oldVal2 = JSON.parse(localStorage.getItem(`Room2_bak`))
let oldVal3 = JSON.parse(localStorage.getItem(`Room3_bak`))
let oldVal4 = JSON.parse(localStorage.getItem(`Room4_bak`))
let oldVal5 = JSON.parse(localStorage.getItem(`Room5_bak`))

//ekect
const elecPred1 = document.getElementById('elecPred1')
const elecPred2 = document.getElementById('elecPred2')
const elecPred3 = document.getElementById('elecPred3')
const elecPred4 = document.getElementById('elecPred4')
const elecPred5 = document.getElementById('elecPred5')
//data
const dataPred1 = document.getElementById('dataPred1')
const dataPred2 = document.getElementById('dataPred2')
const dataPred3 = document.getElementById('dataPred3')
const dataPred4 = document.getElementById('dataPred4')
const dataPred5 = document.getElementById('dataPred5')
//vot
const votPred1 = document.getElementById('votPred1')
const votPred2 = document.getElementById('votPred2')
const votPred3 = document.getElementById('votPred3')
const votPred4 = document.getElementById('votPred4')
const votPred5 = document.getElementById('votPred5')
//gVoter
const votGorPred1 = document.getElementById('votGorPred1')
const votGorPred2 = document.getElementById('votGorPred2')
const votGorPred3 = document.getElementById('votGorPred3')
const votGorPred4 = document.getElementById('votGorPred4')
const votGorPred5 = document.getElementById('votGorPred5')
//int
const intPred1 = document.getElementById('intPred1')
const intPred2 = document.getElementById('intPred2')
const intPred3 = document.getElementById('intPred3')
const intPred4 = document.getElementById('intPred4')
const intPred5 = document.getElementById('intPred5')
//trash
const musPred1 = document.getElementById('musPred1')
const musPred2 = document.getElementById('musPred2')
const musPred3 = document.getElementById('musPred3')
const musPred4 = document.getElementById('musPred4')
const musPred5 = document.getElementById('musPred5')
//otop
const otopPred1 = document.getElementById('otopPred1')
const otopPred2 = document.getElementById('otopPred2')
const otopPred3 = document.getElementById('otopPred3')
const otopPred4 = document.getElementById('otopPred4')
const otopPred5 = document.getElementById('otopPred5')
//dataProjivan
const daPrPred1 = document.getElementById('daPrPred1')
const daPrPred2 = document.getElementById('daPrPred2')
const daPrPred3 = document.getElementById('daPrPred3')
const daPrPred4 = document.getElementById('daPrPred4')
const daPrPred5 = document.getElementById('daPrPred5')
//----------


const room=[ // aray with varible and localsto
[oldVal1,elecPred1,dataPred1,votPred1,votGorPred1,intPred1,musPred1,otopPred1,daPrPred1 ],
[oldVal2,elecPred2,dataPred2,votPred2,votGorPred2,intPred2,musPred2,otopPred2,daPrPred2 ],
[oldVal3,elecPred3,dataPred3,votPred3,votGorPred3,intPred3,musPred3,otopPred3,daPrPred3 ],
[oldVal4,elecPred4,dataPred4,votPred4,votGorPred4,intPred4,musPred4,otopPred4,daPrPred4 ],
[oldVal5,elecPred5,dataPred5,votPred5,votGorPred5,intPred5,musPred5,otopPred5,daPrPred5 ]
]


// show tables 
showValOld=(x,y)=>{ 
    room[x][2].textContent= room[y][0][0]
    room[x][1].textContent= room[y][0][1]
    room[x][3].textContent= room[y][0][2]
    room[x][4].textContent= room[y][0][3]
    room[x][5].textContent= room[y][0][4]
    room[x][6].textContent= room[y][0][5]
    room[x][7].textContent= room[y][0][6]
    room[x][8].textContent= room[y][0][7]
}
let i=0;let iz=0
do { 
    showValOld(i,iz) 
    i++, iz++
  } while (i <= 4&iz<=4);



