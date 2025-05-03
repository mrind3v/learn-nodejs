const math = require("./math.js")
// alt: (destructure) const {add, subtract} = require("./math.js")

// note -> built-in and externally downloaded modules do not need a path like ./{module}


console.log("addition result: ", math.add(1,2))
console.log("subtraction result: ", math.subtract(2,1))
// alt: console.log("addition result: ", add(1,2))
// console.log("subtraction result: ", subtract(2,1))

