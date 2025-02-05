const fs=require("fs");
const data=fs.readFileSync("./data.txt","utf-8");
// console.log(data.toString()) ----- convert data into string
console.log(data)

if(data.match("H"))
{
    console.log("H is present")
    const changeddata=data.replace("H","ABES")
    fs.writeFileSync("./data.txt", changeddata)
}



















// fs.writeFileSync("./data1.txt","created "); 
// fs.appendFileSync("./data1.txt","appended data")
// fs.renameSync("./data1.txt","./data2.txt")
// fs.unlinkSync("./data2.txt")
















//  git add .
//  git commit -m "rename"
//  git push origin main