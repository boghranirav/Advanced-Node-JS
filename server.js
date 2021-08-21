const cluster = require("cluster");

if (cluster.isMaster) {
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  const express = require("express");
  const app = express();
  const crypt = require("crypto");

  app.get("/", (req, res) => {
    crypt.pbkdf2("a", "b", 100000, 512, "sha512", () => {
      res.send("hi!");
    });
  });

  app.get("/fast", (req, res) => {
    res.send("Fast!");
  });

  app.listen(3000);
}
