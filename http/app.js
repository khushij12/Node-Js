const http = require("http"); //built-in

// const server = http.createServer() // here server is event emitter

// server.on('connection',(socket)=>{
//     console.log("Listening on 3000...");
// });

const server = http.createServer((req, resp) => {
    
  if (req.url === "/") {
    
    const body = "Hello World";
    resp.write(body);
    resp.writeHead(200, {
        'Content-Length': body.length,
        'Content-Type': 'text/plain'
    });
    resp.end();
  }

  if (req.url === "/api/courses") {
    resp.write("You are welcome");
    resp.end();
  }

  //for sending response in JSON
//   console.log("INCOMING REQUEST: " + req.method + " " + req.url);
//     res.writeHead(200, { "Content-Type" : "application/json" });
//     res.end(JSON.stringify( { error: null }) + "\n");
});
server.listen(3000);
console.log("Listening on 3000...");
