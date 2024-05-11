const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Dil Dil Pakistan');
    } else if(req.url === '/about'){
        res.end('This is the About page of Pakistan')
    } else {
        res.end(`<h1>404 Not Found</h1>`)
    }
});

server.listen(4569);