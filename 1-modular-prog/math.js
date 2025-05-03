// we use modular programming to break down a complex program in production into chunks
// so that it is easier to maintain. We define fns,objs,vars in a file, export it and then use
// it in a different file 

function add(a,b){
    return a+b 
}

function subtract(a,b){
    return a-b
}

// alt: (not preferred)
// exports.add = (a,b) => {return a+b}
// exports.subtract = (a,b) => {return a-b}

const name = "Mrinmay"

module.exports = {
    add,
    subtract,
    name
}