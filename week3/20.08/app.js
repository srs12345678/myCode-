class Animals{
    constructor(name,age,weight,predator,danger,speed ){
    this.name=name
    this.age =age
    this.weight=weight
    this.predator=predator
    this.danger= danger
    this.speed=speed
    }


}

class Berd extends Animals{
    constructor(name,age,weight,predator,danger,speed,lengthWing){
        super(name,age,weight,predator,danger,speed)
        this.lengthWing=lengthWing
    }

    voice(){
        console.log(' i am  berd carrrrr, carr')
     }
         howSpeed (){
        if(this.speed > 50){ console.log('Fast berd');return}
        console.log('not fast berd')
     } 

     }
    



class Fish extends Animals{
    constructor(name,age,weight,predator,danger,speed,eatAble){
    super(name,age,weight,predator,danger,speed)
    this.eatAble=eatAble
  
}
}

class DryAnimals extends Animals{
    constructor(name,age,weight,predator,danger,speed,runSpeed){
        super(name,age,weight,predator,danger,speed)
        this.runSpeed=runSpeed
    }
}

class Snek extends Animals{
    constructor(name,age,weight,predator,danger,speed,forDrug){
    super(name,age,weight,predator,danger,speed)
    this.forDrug=forDrug
    }
}

let shaks = new Snek("ugj",1,2.43,true,false,false,true)
let egls = new Berd ("Orel",3,2,true,true,100,1.5)
let rabit = new DryAnimals ("krolic",1,0.8,false,false,30,)
let lyuba= new Fish('shark',4,90,true,true,120,false)
let dave = new Berd ("dave",3,2,true,true,30,1.5)
let lubaPtitsa= new Berd("luba",18,65,true,true,10,1.5)


/* console.log(egls.howSpeed())
console.log(dave.howSpeed())

//console.log(dave)
 */

console.log(lyuba)
console.log(lubaPtitsa.voice())