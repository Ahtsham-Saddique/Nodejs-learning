const fs = require('fs');
fs.readFile('./second.js','utf8',
    (err,data)=>
    {
        console.log(data,err);
    }
);
console.log("File reading finished");

const a = fs.readFileSync('./index.js');
console.log(a);
console.log("Reading finished");