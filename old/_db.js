const mysql = require('mysql');

const con = mysql.createConnection({
  host: "july88.beget.tech",
  user: "july88_project",
  password: "wBy%ib0k",
  database:"july88_project",
});



//  UPDATE  user SET email = 'new@emaol.com' WHERA login = 'loginUser'
function update(user,obj,val){
    const update = `UPDATE ${user} SET ${obj} = '${JSON.stringify(val)}'`;
    console.log(val,)
    con.query(update,(err,result,field)=>{
        if (err) throw err;
        console.log("1 record inserted");
        });
}

// SELECT * FROM user WHERE login='loginname' -  return all value  chosed user 
// SELECT email FROM user WHERE login='loginname' - returt email user

function showValue(user){
    let temp= `SELECT * FROM ${user}`;//* mean all object , or password, email
    con.query(temp,(err,result,field)=>{
        if (err) throw err;
        console.log(result);
    })  
}

function addNewUser(email,password,nikName) {
    const newUser = `INSERT INTO user (email,password,name) VALUES ('${email}','${password}','${nikName}')`;
    console.log(newUser)
        con.query(newUser,(err,result,field)=>{
            if (err) throw err;
            console.log("1 record inserted",result);
            });

        }


function addLineValue(user,obj,value){
    const addLine= `INSERT INTO ${user} (${obj}) VALUES ('${value}')`;
    con.query(addLine,(err,result,field)=>{
        if (err) throw err;
        console.log("1 record inserted");
        });
}
 //DELETE FROM user WHERE login='loginname'

 addNewUser('QQQ@QQ.RU','45654g&^','ogogoO')
 showValue('user')

// let a= 'string'
// let b=a.join('')
// console.log(b)


