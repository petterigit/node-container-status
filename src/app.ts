import express from "express";
import { sendHTML } from "./routes/routing";
import { Routes } from "./types/enums";

const app = express();
const port = 3000;

app.get("/", (_, res) => {
  sendHTML(Routes.Index, res);
});

app.get("/status", (_, res) => {
  sendHTML(Routes.Status, res);
});

app.get("*", (_, res) => {
  sendHTML(Routes.NotFound, res);
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
