const path = require('path')

console.log(path.sep); //prints '/'

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath);//prints /content/subfolder/test.txt

const base = path.basename(filePath);
console.log(base); //test.txt

const absolutePath = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolutePath); ///Users/kalpeshdesai/Documents/node_tutorial/content/subfolder/test.txt
