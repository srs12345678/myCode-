//  привет я пытаюсь применить цыкл к этим данным и не могу понять последовательность 

howBakvalue=(x,y,z,w)=>{
    if (roomBak[0][x]!==null){
      document.getElementById(valueBak1Room[y][x]).textContent=roomBak[w][x][z]
      return;
    }
    console.log('stop',`valueBak1Room[${y}][${x}],roomBak[${w}][${x}][${z}] ]`)
    }



/*  it is not works way 

showBakvalue=(x,y,z,w)=>{
if (roomBak[0][x]!==null){
  document.getElementById(valueBak1Room[y][x]).textContent=roomBak[0][x][1]
  /* document.getElementById(valueBak1Room[y][x]).textContent=roomBak[0][x][2]
  document.getElementById(valueBak1Room[2][x]).textContent=roomBak[0][x][3]
  //--
  document.getElementById(valueBak1Room[3][x]).textContent=roomBak[1][x][1]
  document.getElementById(valueBak1Room[4][x]).textContent=roomBak[1][x][2]
  document.getElementById(valueBak1Room[5][x]).textContent=roomBak[1][x][3]
 
  return;
}
console.log('stop','doing ',`valueBak1Room[${y}][${x}],roomBak[${w}][${x}][${z}] ]`)
}

let x= 0
let y= 0
let z= 1

/// ---- not worked
  do {console.log(x,y),y++
    
    do {x=0,console.log('l___'+x,y),x++
    } while (x<=5);

  } while (y<=5); 
  
  //-----  not worked
  do {console.log('l1 '+x,y),x++ &  console.log('l2 '+x,y),y++ 
  showBakvalue(x,y)
  } while (x<6,y<=5); */



document.getElementById(valueBak1Room[0][0]).textContent=roomBak[0][0][1]
document.getElementById(valueBak1Room[0][1]).textContent=roomBak[0][1][1]
document.getElementById(valueBak1Room[0][2]).textContent=roomBak[0][2][1]
document.getElementById(valueBak1Room[0][3]).textContent=roomBak[0][3][1]
document.getElementById(valueBak1Room[0][4]).textContent=roomBak[0][4][1]
document.getElementById(valueBak1Room[0][5]).textContent=roomBak[0][5][1]
document.getElementById(valueBak1Room[0][6]).textContent=roomBak[0][6][1]
//--
document.getElementById(valueBak1Room[1][0]).textContent=roomBak[0][0][2]
document.getElementById(valueBak1Room[1][1]).textContent=roomBak[0][1][2]
document.getElementById(valueBak1Room[1][2]).textContent=roomBak[0][2][2]
document.getElementById(valueBak1Room[1][3]).textContent=roomBak[0][3][2]
document.getElementById(valueBak1Room[1][4]).textContent=roomBak[0][4][2]
document.getElementById(valueBak1Room[1][5]).textContent=roomBak[0][5][2]
document.getElementById(valueBak1Room[1][6]).textContent=roomBak[0][6][2]
//---
document.getElementById(valueBak1Room[2][0]).textContent=roomBak[0][0][3]
document.getElementById(valueBak1Room[2][1]).textContent=roomBak[0][1][3]
document.getElementById(valueBak1Room[2][2]).textContent=roomBak[0][2][3]
document.getElementById(valueBak1Room[2][3]).textContent=roomBak[0][3][3]
document.getElementById(valueBak1Room[2][4]).textContent=roomBak[0][4][3]
document.getElementById(valueBak1Room[2][5]).textContent=roomBak[0][5][3]
document.getElementById(valueBak1Room[2][6]).textContent=roomBak[0][6][3]
//2room
document.getElementById(valueBak1Room[3][0]).textContent=roomBak[1][0][1]
document.getElementById(valueBak1Room[3][1]).textContent=roomBak[1][1][1]
document.getElementById(valueBak1Room[3][2]).textContent=roomBak[1][2][1]
document.getElementById(valueBak1Room[3][3]).textContent=roomBak[1][3][1]
document.getElementById(valueBak1Room[3][4]).textContent=roomBak[1][4][1]
document.getElementById(valueBak1Room[3][5]).textContent=roomBak[1][5][1]
document.getElementById(valueBak1Room[3][6]).textContent=roomBak[1][6][1]
//--
document.getElementById(valueBak1Room[4][0]).textContent=roomBak[1][0][2]
document.getElementById(valueBak1Room[4][1]).textContent=roomBak[1][1][2]
document.getElementById(valueBak1Room[4][2]).textContent=roomBak[1][2][2]
document.getElementById(valueBak1Room[4][3]).textContent=roomBak[1][3][2]
document.getElementById(valueBak1Room[4][4]).textContent=roomBak[1][4][2]
document.getElementById(valueBak1Room[4][5]).textContent=roomBak[1][5][2]
document.getElementById(valueBak1Room[4][6]).textContent=roomBak[1][6][2]
//---
document.getElementById(valueBak1Room[5][0]).textContent=roomBak[1][0][3]
document.getElementById(valueBak1Room[5][1]).textContent=roomBak[1][1][3]
document.getElementById(valueBak1Room[5][2]).textContent=roomBak[1][2][3]
document.getElementById(valueBak1Room[5][3]).textContent=roomBak[1][3][3]
document.getElementById(valueBak1Room[5][4]).textContent=roomBak[1][4][3]
document.getElementById(valueBak1Room[5][5]).textContent=roomBak[1][5][3]
document.getElementById(valueBak1Room[5][6]).textContent=roomBak[1][6][3]