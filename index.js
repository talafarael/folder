const  {createFolder,createFile}=require("./utils/createFileAndFolder");
const pathSwitch=require("./utils/path")
const fs = require("fs")
let sum=0
const number=5;
const jumpFol=6;
async function rec(num,jump,path){
   
    // let num=3;
    const dir=pathSwitch(path,num);
    if(num==0){
        return ;
    }
    if(jump==-1){
        console.log("end")
        return 0;
    }
    const math=Math.floor(Math.random()*2)
    if(jump!=-1){
    createFolder(dir)
}
    console.log(math)
    if(math==1&&jump!=jumpFol){

        createFile(dir)
    }
     
    rec(number,jump=jump-1,dir)
    num-=1
    rec(num,jump+1,path)

}
function readFile(num,jump,path){
     dir=pathSwitch(path,num);
    if(num==0){
        return ;
    }
    if(jump==-1){
        console.log("end")
        return 0;
    }
    fs.readdirSync(dir).forEach(file => {
        if(file.split('.')[1]){
            sum++
            
        }
      });
     
      readFile(number,jump=jump-1,dir);
  
    num-=1
    readFile(num,jump+1,path)
}
rec(number,jumpFol,"./dir")

readFile(number,jumpFol,"./dir")
console.log(sum)
