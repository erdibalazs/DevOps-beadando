const http = require("http");

const PORT = process.env.PORT || 8080;

let ts = Date.now();

let date_time = new Date(ts);
let date = date_time.getDate();
let month = date_time.getMonth() + 1;
let year = date_time.getFullYear();
let hours = date_time.getHours();
let minutes = date_time.getMinutes();

// prints date & time in YYYY-MM-DD format
let timenow=(year + "-" + month + "-" + date+" "+hours+":"+minutes);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("Hello DevOps WORLD 2.0! Ez egy Node.js alkalmazás.\nPontos idő: "+timenow+"\n");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
