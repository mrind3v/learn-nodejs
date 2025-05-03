const fs = require("fs")

// read sync -> can store the read data in a variable
const data = fs.readFileSync("./fileToReadFrom.txt", "utf-8")
console.log(data) 

// read async -> cannot store it in a variable and expects a callback with err,data
fs.readFile("./fileToReadFrom.txt", "utf-8", (err,data)=>{
    if (err){
        console.log("Error message:", error)
    }
    else {
        console.log(data)
    }
})

// write sync
fs.writeFileSync("./writtenFile.txt", "written by fs sync")

// write async 
fs.writeFile("./writtenFile.txt", "written by fs async", (err)=>console.log(err))

// append sync
fs.appendFileSync("./appendedFile.txt", `append line sync\n`)

// append async
fs.appendFile("./appendedFile.txt", `append line async\n`, (err)=>console.log(err))
