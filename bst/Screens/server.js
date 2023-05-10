const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url=="/"){
    res.writeHead(200,{'content-type':'text/html'});
    res.write("Hello world!");
    res.end("<h1>This is Home page</h1>The url was:"+req.url);
    }
    if(req.url=="/student"){
    res.writeHead(200,{'content-type':'text/html'});
    res.write("Hello world!");
    res.end("<h1>This is Student page</h1>The url was:"+req.url);
    }
    if(req.url=="/admin"){
    res.writeHead(200,{'content-type':'text/html'});
    res.write("Hello world!");
    res.end("<h1>This is Admin page</h1>The url was:"+req.url);
    }
    else{
        res.end("<h1>Error 404 Page not found");
    }

})

server.listen(8000);
console.log("server is runnning");