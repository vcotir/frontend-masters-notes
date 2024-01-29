import http from "http"; // module for interacting with APIs

// client is ANYTHING connected to internet. request/response happens. then connection is closed
// express heavily leverages http
const server = http.createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.statusCode(200);
    res.end();
  }
});
