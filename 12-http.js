const http = require('http');

const server = http.createServer((req,res)=>{
    // res.write('Welcome');
    // res.end(' World');
    if(req.url === '/'){
        res.write('<h1>Welcome to home page</h1>');
    } else if(req.url === '/about'){
        res.write('<h1>about page</h1>');
    } else{
        res.write(`<h1>Ooops! We can't process</h1>
        <p><a href='/'>Back</a></p>`)
    }
    res.end();
})

server.listen(5001);