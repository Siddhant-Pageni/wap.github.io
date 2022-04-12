const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Using Async readFile
    fs.readFile(path.join(__dirname, 'panda.jpg'), (err, data) => {
        res.end(data);
    });

    // using Syncronous readFile
    // let img = fs.readFileSync(path.join(__dirname, 'panda.jpg'));
    // res.end(img);
}).listen(3000);