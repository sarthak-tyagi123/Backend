const fs=require("fs");
// const data=fs.readFileSync("./data.txt","utf-8");
// // console.log(data.toString()) ----- convert data into string
// console.log(data)


fs.writeFileSync("./data1.txt","created "); 
fs.appendFileSync("./data1.txt","appended data")
fs.renameSync("./data1.txt","./data2.txt")