const  {createFolder,createFile}=require("./utils/createFileAndFolder");
const pathSwitch=require("./utils/path")
const fs = require("fs")
const endRecursion=require("./utils/endRecursion")
let sum=0
const number=2;
const jumpFol=2;
async function rec(num,jump,path){
   
    // let num=3;
    const dir=pathSwitch(path,num);
   const end=endRecursion(num,jump)
   if(end){
    return;
   }
    const math=Math.floor(Math.random()*2)
    if(jump!=-1){
    createFolder(dir)
}
    console.log(math)
    if(math==1 && jump!=jumpFol){

        createFile(dir)
    }
     
    rec(number,jump=jump-1,dir)
    num-=1
    rec(num,jump+1,path)

}
function readFile(num,jump,path){
     dir=pathSwitch(path,num);
     const end=endRecursion(num,jump)
     if(end){
      return;
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
