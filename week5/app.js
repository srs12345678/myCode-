const accaunt= JSON.parse(localStorage.getItem(`Accaunt`))||[]
let yy

let searchAccaunt =(loginUser)=>{
    yy= accaunt.find(user => user.login ===loginUser)||[]
}



class User {
    constructor(login,password,email){
        this.login=login.toLowerCase().trim()
        this.password=password
        this.email=email.toLowerCase().trim()
        this.id
    }
    editPassword(newPassword){
        this.password=newPassword
        accaunt[this.id][1]=this.password
        localStorage.setItem(`Accaunt`,JSON.stringify(accaunt))
    }
    
    editEmail(newEmail){
        this.email=newEmail
        accaunt[this.id][2]=newEmail
        localStorage.setItem(`Accaunt`,JSON.stringify(accaunt))
    }
    
    deleteAccaunt(){
         delete accaunt[this.id]
        localStorage.setItem(`Accaunt`,JSON.stringify(accaunt))
    }
}

class SimplUser extends User{
            constructor(login,password,email){
            super(login,password,email,);
            this.newAccaunt(login,password,email)
    }

        newAccaunt(login,password,email){
            this.makeId()
            const id = this.id
            
            const accaunt= JSON.parse(localStorage.getItem(`Accaunt`))||[]

            accaunt.push({
                login:this.login,
                password:this.password,
                email:this.email,
            })   

                localStorage.setItem('Accaunt',JSON.stringify(accaunt))
            }   

        

        makeId(){
            const oldId  = parseInt(localStorage.getItem('idNum'))||0
            this.id=oldId+1
            localStorage.setItem('idNum',this.id)

        }
          
    }

    class SuperUser extends User{
        constructor(login,password,email){
        super(login,password,email,)
        this.makeAdmin()
        }

        
        makeAdmin(){
            if ( localStorage.getItem(`Accaunt_0`)==null){
            localStorage.setItem(`Accaunt_0`,JSON.stringify([this.login,this.password,this.email]))
            return;
        }
            alert('admin had')
        }
        
        showValue(id){
            let temp = JSON.parse(localStorage.getItem(`Accaunt`))
            alert(temp[id])
        }

        editValueUser(idNum,log,pass,mail){
            if (idNum==undefined || log==undefined){
                return ;
            }

            let temp=JSON.parse(localStorage.getItem(`Accaunt`))
            temp[idNum] = [log,pass,mail]
            localStorage.setItem(`Accaunt`,JSON.stringify(temp))
            
        }
}
const div= document.getElementsByClassName('div')
const reg=document.getElementById('reg')
const forReg=document.getElementById('forReg')
const enter=document.getElementById('enter')
const email=document.getElementById('email')
const password=document.getElementById('password')
const login=document.getElementById('login')
const loginReg=document.getElementById('loginReg')
const passwordReg=document.getElementById('passwordReg')
const emailReg=document.getElementById('emailReg')
const mess= document.getElementById("message")


// hide&show div

showHide=(z,y,w)=> { 
    div[1].style.display = z;
    div[2].style.display = y
    div[3].style.display = w
}
showHide("none","none","none")

reg.onclick=()=>{
    showHide('') 
    div[0].style.display ='none'
   
}

// regest
chekValidValue=()=>{}

forReg.onclick=()=>{
    let registration = new SimplUser(loginReg.value,passwordReg.value,emailReg.value)
    window.location.href=`login.html`
    
}
enter.onclick=()=>{
    searchAccaunt(login.value)
   
    if(yy.login==undefined){
        showHide("none","","none")
        //console.log('Учетная запись отсутствует')
        yy=undefined
        return;
    }
    if(login.value==yy.login&&password.value==yy.password) {
       //console.log('добро пожаловать')
        location.href ="/curent/calcForHous/index.html"

       yy=undefined
       return;
    }
    //console.log('учетные данные неверны')
    showHide("none","none","")
    yy=undefined

}



// console.log(`id--, login reg --${loginReg.value}, passwordReg--${passwordReg.value},emailReg--${emailReg.value}`)
//localStorage.clear()

// const u1 = new SimplUser('ferst','3214','ferst@kf.ru')
// const u2 = new SimplUser('second','3214','second@kf.ru')
// const u3 = new SimplUser('therd','3214','therd@kf.ru')
// const u4 = new SimplUser('ford','3214','ford@kf.ru')


// const admin = new SuperUser('admin','2314','admin@admin.ru')
// admin.editValueUser('1','ferst','1111','ferst11@bk.ru')
// u2.deleteAccaunt()


//admin.editValueUser('2','rommm',)
//admin.showValue('1')
// let inn = 1

// let qq={1:[1,2,3]}


// let qqq={2:[33,22,11],
//          1:[1,2,3]
// }

// localStorage.setItem(`test`,JSON.stringify(qqq))
// let temp=JSON.parse(localStorage.getItem(`test`))
// localStorage.setItem(`test`,JSON.stringify(temp[3]=[5,5,5]))
// console.log('test--',temp)

// localStorage.setItem(`test`,JSON.stringify(temp2))
// let temp1=JSON.parse(localStorage.getItem(`test`))



// temp3={temp1,1:qqqq}
// localStorage.setItem(`test`,JSON.stringify(temp3))
// let temp4=JSON.parse(localStorage.getItem(`test`))











