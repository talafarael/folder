const fs = require("fs")
const number=10;
const jumpFol=4;
function rec(num,jump,path){
   
    // let num=3;
    const dir=`${path}/dir${num}`
    if(num==0){
        return ;
    }
    if(jump==0){
        console.log("end")
        return 0;
    }
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }  
    if(num%2==0){
     fs.writeFileSync(`${dir}.txt`, 'hell', 'utf8');
    }

      console.log("jump"+jump)
    rec(number,jump=jump-1,dir)
  
    num-=1
    rec(num,jump+1,path)

}
rec(number,jumpFol,".")