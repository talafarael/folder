const fs = require("fs")

async function createFolder(dir){
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }  
}
async function createFile(dir){
    fs.writeFileSync(`${dir}.txt`, 'hell', 'utf8');
}
module.exports={createFolder, createFile};