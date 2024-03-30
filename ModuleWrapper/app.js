// Under the hood, NodeJS does not run our code directly, it wraps the entire code inside a function before execution. 
// This function is termed as Module Wrapper Function. 

// (function (exports, require, module, __filename, __dirname) {
//     //module code
//   });

console.log(__filename);
console.log(__dirname);

const logger = require('../createModule/Logger') 


