//sync
const {readFileSync,writeFileSync} = require('fs') //another way of using method directly

//if utf-8 is not given then binary buffer file will be obtained
// const first = readFileSync('./first.txt','utf8')
// const second = readFileSync('./second.txt','utf8')


// writeFileSync('./third.txt',`Here is both - ${first} and ${second} Sync`,{flag:'a'});

//async
const {readFile,writeFile} = require('fs');

readFile('./first.txt','utf-8',(err,result) => {
    if(err) {console.log(err); return ;}
    else {
        const first = result;
        readFile('./second.txt','utf-8',(err,result) => {
            if(err) {console.log(err); return ;}
            else {
                const second = result;
                writeFile('./third.txt',`Here is both - ${first} and ${second} Asynchronously`,{flag:'a'},(err,result) => {
                    if(err) {console.log(err); return ;}
                    else{
                        console.log(result);
                    }
                })
            }
        })
    }
})