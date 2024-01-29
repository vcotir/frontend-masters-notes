import express from "express";
import path from "node:path";

const app = express();

// app.use(express.static("static")); // might not matter that much

app.get("/", (req, res) => {
  console.log("hello from express");

  res.status(200);
  res.json({ message: "hello" });
});

app.get("/applause", (req, res) => {
  res.sendFile(path.resolve(path.dirname("."), "assets/applause.wav"));
});

export default app;
// /Users/victor/Projects/fem/api-design-in-node-js-v4/course/src/assets/applause.wav
