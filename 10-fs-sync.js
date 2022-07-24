const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');
console.log(first,',',second); //hello first , hello second

//writeFileSync('./content/result-sync.txt',`The result is ${first}, ${second}`);// Node creates the file result-sync.txt if not present
writeFileSync('./content/result-sync.txt',`The result is ${first}, ${second}`,{flag:'a'}); //{flag:'a'} appends the text into the file
