//editMenu
const r1 = document.getElementById('r1')// num room
const r2 = document.getElementById('r2')// num room
const r3 = document.getElementById('r3')// num room
const r4 = document.getElementById('r4')// num room
const r5 = document.getElementById('r5')// num room
//------

let oldVal1 = JSON.parse(localStorage.getItem(`Room1`))
let oldVal2 = JSON.parse(localStorage.getItem(`Room2`))
let oldVal3 = JSON.parse(localStorage.getItem(`Room3`))
let oldVal4 = JSON.parse(localStorage.getItem(`Room4`))
let oldVal5 = JSON.parse(localStorage.getItem(`Room5`))
//------
let oldVal11 = JSON.parse(localStorage.getItem(`Room1_bak`))
let oldVal21 = JSON.parse(localStorage.getItem(`Room2_bak`))
let oldVal31 = JSON.parse(localStorage.getItem(`Room3_bak`))
let oldVal41 = JSON.parse(localStorage.getItem(`Room4_bak`))
let oldVal51 = JSON.parse(localStorage.getItem(`Room5_bak`))
//--
let oldVal12 = JSON.parse(localStorage.getItem(`Room1_bak1`))
let oldVal22 = JSON.parse(localStorage.getItem(`Room2_bak1`))
let oldVal32 = JSON.parse(localStorage.getItem(`Room3_bak1`))
let oldVal42 = JSON.parse(localStorage.getItem(`Room4_bak1`))
let oldVal52 = JSON.parse(localStorage.getItem(`Room5_bak1`))
//----
let oldVal13 = JSON.parse(localStorage.getItem(`Room1_bak2`))
let oldVal23 = JSON.parse(localStorage.getItem(`Room2_bak2`))
let oldVal33 = JSON.parse(localStorage.getItem(`Room3_bak2`))
let oldVal43 = JSON.parse(localStorage.getItem(`Room4_bak2`))
let oldVal53 = JSON.parse(localStorage.getItem(`Room5_bak2`))
//------
let oldVal14 = JSON.parse(localStorage.getItem(`Room1_bak3`))
let oldVal24 = JSON.parse(localStorage.getItem(`Room2_bak3`))
let oldVal34 = JSON.parse(localStorage.getItem(`Room3_bak3`))
let oldVal44 = JSON.parse(localStorage.getItem(`Room4_bak3`))
let oldVal54 = JSON.parse(localStorage.getItem(`Room5_bak3`))
//-------
let oldVal15 = JSON.parse(localStorage.getItem(`Room1_bak4`))
let oldVal25 = JSON.parse(localStorage.getItem(`Room2_bak4`))
let oldVal35 = JSON.parse(localStorage.getItem(`Room3_bak4`))
let oldVal45 = JSON.parse(localStorage.getItem(`Room4_bak4`))
let oldVal55 = JSON.parse(localStorage.getItem(`Room5_bak4`))
//-----
let oldVal16 = JSON.parse(localStorage.getItem(`Room1_bak5`))
let oldVal26 = JSON.parse(localStorage.getItem(`Room2_bak5`))
let oldVal36 = JSON.parse(localStorage.getItem(`Room3_bak5`))
let oldVal46 = JSON.parse(localStorage.getItem(`Room4_bak5`))
let oldVal56 = JSON.parse(localStorage.getItem(`Room5_bak5`))





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
//  value from 6 manth
      const roomBak =[
      [oldVal1,oldVal11,oldVal12,oldVal13,oldVal14,oldVal15,oldVal16],
      [oldVal2,oldVal21,oldVal22,oldVal23,oldVal24,oldVal25,oldVal26],
      [oldVal3,oldVal31,oldVal32,oldVal33,oldVal34,oldVal35,oldVal36],
      [oldVal4,oldVal41,oldVal42,oldVal43,oldVal44,oldVal45,oldVal46],
      [oldVal5,oldVal51,oldVal52,oldVal53,oldVal54,oldVal55,oldVal56],
      ]


      const valueBak1Room =[
      ['r101','r111','r121','r131','r141','r151','r161'],
      ['r102','r112','r122','r132','r142','r152','r162'],
      ['r103','r113','r123','r133','r143','r153','r163'],
      ['r201','r211','r221','r231','r241','r251','r261'],
      ['r202','r212','r222','r232','r242','r252','r262'],
      ['r203','r213','r223','r233','r243','r253','r263'],
      ['r301','r311','r321','r331','r341','r351','r361'],
      ['r302','r312','r322','r332','r342','r352','r362'],
      ['r303','r313','r323','r333','r343','r353','r363'],
      ['r401','r411','r421','r431','r441','r451','r461'],
      ['r402','r412','r422','r432','r442','r452','r462'],
      ['r403','r413','r423','r433','r443','r453','r463'],
      ['r501','r511','r521','r531','r541','r551','r561'],
      ['r502','r512','r522','r532','r542','r552','r562'],
      ['r503','r513','r523','r533','r543','r553','r563'],
      ['r601','r611','r621','r631','r641','r651','r661'],
      ['r602','r612','r622','r632','r642','r652','r662'],
      ['r603','r613','r623','r633','r643','r653','r663'],
      ]


      ///----1 room


      showBakvalue1=(x,y,z)=>{
      if (roomBak[0][y]!==null){
      document.getElementById(valueBak1Room[x][y]).textContent=roomBak[0][y][z]
      document.getElementById(valueBak1Room[x][y]).textContent=roomBak[0][y][z]
      document.getElementById(valueBak1Room[x][y]).textContent=roomBak[0][y][z]
      return;
      }

      console.log('stop','doing ',`valueBak1Room[${y}][${x}],roomBak[0][${x}][${z}] ]`)
      }

      let x= 0;let y= 0;let z= 1
      for (z = 1; z <=3; z++) {
          for (x = 0; x <=2; x++) {
              for (y = 0; y <=6; y++) {
                showBakvalue1(x,y,z) ;     
        }
        }
      }

      //--- room 2

      showBakvalue2=(x2,y2,z2)=>{
        if (roomBak[1][y2]!==null){
        document.getElementById(valueBak1Room[x2][y2]).textContent=roomBak[1][y2][z2]
        document.getElementById(valueBak1Room[x2][y2]).textContent=roomBak[1][y2][z2]
        document.getElementById(valueBak1Room[x2][y2]).textContent=roomBak[1][y2][z2]
        return;
        }
        console.log('stop','doing ',`valueBak1Room[${y2}][${x2}],roomBak[0][${x2}][${z2}] ]`)
        }
        
        x2= 3;y2= 0;z2= 1
        for (let z2 = 1; z2 < 3; z2++) {
            for (let x2 = 3; x2 <=5; x2++) {
                for (let y2 = 0; y2 < 7; y2++) {
                  console.log('x2=',x2,' y2=',y2,' z2=',z2),showBakvalue2(x2,y2,z2);     
          }
          }
        }
      //3 room

      showBakvalue3=(x2,y2,z2)=>{
        if (roomBak[2][y2]!==null){
        document.getElementById(valueBak1Room[x2][y2]).textContent=roomBak[2][y2][z2]
        document.getElementById(valueBak1Room[x2][y2]).textContent=roomBak[2][y2][z2]
        document.getElementById(valueBak1Room[x2][y2]).textContent=roomBak[2][y2][z2]
        return;
        }
        console.log('stop','doing ',`valueBak1Room[${y2}][${x2}],roomBak[0][${x2}][${z2}] ]`)
        }
        
        x2= 6;y2= 0;z2= 1
        for (let z2 = 1; z2 < 3; z2++) {
            for (let x2 = 6; x2 <=8; x2++) {
                for (let y2 = 0; y2 < 7; y2++) {
                 showBakvalue3(x2,y2,z2);     
          }
          }
        }

        showBakvalue4=(x2,y2,z2)=>{
          if (roomBak[3][y2]!==null){
          document.getElementById(valueBak1Room[x2][y2]).textContent=roomBak[3][y2][z2]
          document.getElementById(valueBak1Room[x2][y2]).textContent=roomBak[3][y2][z2]
          document.getElementById(valueBak1Room[x2][y2]).textContent=roomBak[3][y2][z2]
          return;
          }
          console.log('stop','doing ',`valueBak1Room[${y2}][${x2}],roomBak[0][${x2}][${z2}] ]`)
          }
          
          x2= 9;y2= 0;z2= 1
          for (let z2 = 1; z2 < 3; z2++) {
              for (let x2 = 9; x2 <=11; x2++) {
                  for (let y2 = 0; y2 < 7; y2++) {
                   showBakvalue4(x2,y2,z2);     
            }
            }
          }

          showBakvalue5=(x2,y2,z2)=>{
            if (roomBak[4][y2]!==null){
            document.getElementById(valueBak1Room[x2][y2]).textContent=roomBak[4][y2][z2]
            document.getElementById(valueBak1Room[x2][y2]).textContent=roomBak[4][y2][z2]
            document.getElementById(valueBak1Room[x2][y2]).textContent=roomBak[4][y2][z2]
            return;
            }
            console.log('stop','doing ',`valueBak1Room[${y2}][${x2}],roomBak[0][${x2}][${z2}] ]`)
            }
            
              x2= 12;y2= 0;z2= 1
              for (let z2 = 1; z2 < 3; z2++) {
                  for (let x2 = 12; x2 <=14; x2++) {
                      for (let y2 = 0; y2 < 7; y2++) {
                       showBakvalue5(x2,y2,z2);     
                }
                }
              }

 


// show tables old value

showValOld=(x,y)=>{ 
  if (room[x][0]!==null){
    room[x][2].textContent= room[y][0][0]
    room[x][1].textContent= room[y][0][1]
    room[x][3].textContent= room[y][0][2]
    room[x][4].textContent= room[y][0][3]
    room[x][5].textContent= room[y][0][4]
    room[x][6].textContent= room[y][0][5]
    room[x][7].textContent= room[y][0][6]
    room[x][8].textContent= room[y][0][7]
}
return
}

let i=0;let iz=0
do { 
    showValOld(i,iz) 
    i++, iz++
  } while (i <= 4&iz<=4);


//----edit
r1.onclick = () => {
  window.location.href=`editValue.html?num=1`
}

r2.onclick = () => {
  window.location.href=`editValue.html?num=2`
}

r3.onclick = () => {
  window.location.href=`editValue.html?num=3`
}

r4.onclick = () => {
  window.location.href=`editValue.html?num=4`
}

r5.onclick = () => {
  window.location.href=`editValue.html?num=5`
}


 const function1=(x)=>{
  return `const ${x} = document.getElementById('${x}')`
}

function1('r3')



//---- Math.max\
Math.max((roomBak[0][0][1]),(roomBak[0][0][2]))
