// import http from "http"; // module for interacting with APIs
// import { CLIENT_RENEG_LIMIT } from "tls";

// // client is ANYTHING connected to internet. request/response happens. then connection is closed
// // express heavily leverages http
// const server = http.createServer(async (req, res) => {
//   if (req.method === "GET" && req.url === "/") {
//     // res.statusCode(200);
//     res.end();
//   }
// });

// const port = 3001;
// server.listen(port, () => {
//   console.log("server on http://localhost:", port);
// });

import app from "./server.js";
const port = 3001;
app.listen(port, () => {
  console.log(`hello on port ${port}`);
});
