const path = require('path') //built-in

console.log(path.parse(__filename));

console.log(path.sep);

normalizedPath = path.join('/content','firstpart','test.txt')
console.log(normalizedPath);

console.log(path.basename(normalizedPath));

//absolute path
console.log(path.resolve(__dirname,'content','firstpart','test.txt'));