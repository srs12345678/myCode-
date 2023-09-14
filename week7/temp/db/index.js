const con =require('./_get');

// UPDATE  user SET email = 'new@emaol.com' WHERA login = 'loginUser'
function update(user,obj,val){
  const update = `UPDATE ${user} SET ${obj} = '${JSON.stringify(val)}'`;
  console.log(val,)
  con.query(update,(err,result,field)=>{
    if (err) throw err;console.log(result);con.end() });
}

// SELECT * FROM user WHERE login='loginname' -  return all value  chosed user cd
// SELECT email FROM user WHERE login='loginname' - returt email user

function showValue(user){
  let temp= `SELECT * FROM ${user}`;//* mean all object , or password, email
  con.query(temp,(err,result,field)=>{
    if (err) throw err;console.log(result);con.end()
  })  
}


function addNewUser(email,password,nikName) {
  const newUser = `INSERT INTO user (email,password,name) VALUES ('${email}','${password}','${nikName}')`;
      con.query(newUser,(err,result,field)=>{
        if (err) throw err;console.log(result);con.end()
      })
    }


function addLineValue(user,obj,value){
  const addLine= `INSERT INTO ${user} (${obj}) VALUES ('${value}')`;
  con.query(addLine,(err,result,field)=>{
    if (err) throw err;console.log(result);con.end()
      });
}


    