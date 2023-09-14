const fs =require('fs') // module operation with file
const path = require('path')

// chec folders
function checF(){
    const pathTo = './db/fs/data'
    if(fs.existsSync(pathTo)){
    return console.log(pathTo,'---yes')
    }
    console.log(pathTo,'----no')
}
checF()

//________________________--chek file

function checFile(){
    const pathTo = './db/fs/data/data.json'
    if(fs.existsSync(pathTo)){
    return console.log(pathTo,'----yes')
    }
    console.log(pathTo,'----no')
}
checFile()

//-----------------chek properties file 

function checFproperty(){
    const pathTo = './db/fs/data/data.json'
    const fileInfo=fs.statSync(pathTo)
    console.log(fileInfo.size,'B')
    console.log(fileInfo.birthtime)

}
checFproperty()

//----------------------name and extension file 

function checFExtension(){
    const pathTo = './db/fs/data/data.json'
    const fileInfo= path.basename(pathTo)
    const fileInfoDir= path.dirname(pathTo)
    const fileInfoextname= path.extname(pathTo)
    const fileInfoparse= path.parse(pathTo)
    // or  fileInfoparse.base ,fileInfoparse.dir,fileInfoparse.name.....

    
    console.log('file and ext________',fileInfo,'/path_____',fileInfoDir,'/_____',fileInfoextname,'/________',fileInfoparse )

}
checFExtension()