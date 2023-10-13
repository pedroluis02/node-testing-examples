import http from "http";

const HOSTAME = "127.0.0.1";
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello World!",
    }),
  );
});

server.listen(PORT, () => {
  console.log(`Server running at http://${HOSTAME}:${PORT}/`);
});
