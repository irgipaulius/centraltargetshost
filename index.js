import express from "express";
import fs from "fs";
import path from "path";

import config from "./config.json";

const app = express();
app.set("view options", { layout: false });
app.use(express.json());

app.listen(config.serverPort, () => {
  console.log(`App listening on port ${config.serverPort}!`);
});

let targets = []; // : string[]

const readFileAsync = () => {
  fs.readFile("targetlist.json", (error, data) => {
    if (!error) {
      targets = JSON.parse(data);
    }
  });

  setTimeout(() => readFileAsync(), 1000); // update targets list ever second.
};

app.get(config.endpoint, function (req, res) {
  res.send(targets);
});

readFileAsync();
