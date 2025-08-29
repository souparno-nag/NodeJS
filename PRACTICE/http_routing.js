const http = require("http");

const server = http.createServer((req, res) => {
    // console.log(req);
    const url = req.url;
    if (url === "/") {
        res.writeHead(200, {"content-type" : "text-plain"});
        res.end("Home page");
    } else if (url === "/about") {
        res.writeHead(200, {"content-type" : "text-plain"});
        res.end("About page");
    } else if (url === "/contact") {
        res.writeHead(200, {"content-type" : "text-plain"});
        res.end("Contact page");
    } else if (url === "/json") {
        res.writeHead(200, {"content-type" : "application/json"});
        res.end({"Hello" : "World"});
    } else {
        res.writeHead(404, {"content-type" : "text-plain"});
        res.end("404 Not Found");
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is now listening to port ${PORT}`);
});