const {readFile, writeFile} = require('fs');

readFile('./content/first.txt','utf-8',(err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    //console.log(data); //prints hello first asynchronously
    const first = data;

    readFile('./content/second.txt','utf-8', (err, data)=>{
        if(err){
            console.log(err);
            return;
        }
        //console.log(data); //prints hello first asynchronously
        const second = data;
        writeFile('./content/result-async.txt',`The async result is ${first}, ${second}`, (err, data)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(data);
        });
    })
})

