
const http=require("http");
const port = 4000;
const hostname="localhost";
const fs = require("fs");

const homepage = fs.readFileSync("./index.html","utf-8");

const server  = http.createServer((req,res)=>{

    if(req.url==="/"){

        res.end(homepage);
    }

    if(req.url==="/about"){

        res.end("<h1>About Us</h1>");
    }

    if(req.url==="/service"){

        res.end("<h1>Service</h1>");
    }
    if(req.url==="/contact"){

        res.end("<h1>Contact Us</h1>");
    }




});

server.listen(port,hostname,()=>{



    console.log("Server Working");
})
