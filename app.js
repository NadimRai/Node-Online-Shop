const http = require('http');
const server = http.createServer((req,res) =>{
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node Online Shop</title></head>');
    res.write('<body><h1>Online Shop </h1></body>');
    res.write('</html>');
    res.end();
});
server.listen(3000);