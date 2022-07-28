import express from "express";
import { sendHTML } from "./routes/routing";
import { getDockerContainerStatus } from "./routes/status/status";
import { Routes } from "./types/enums";

const app = express();
const port = 3000;

app.get("/", (_, res) => {
  sendHTML(Routes.Index, res);
});

app.get("/status", async (_, res) => {
  const dockerRes = await getDockerContainerStatus();
  return res.send(dockerRes.stdout);
});

app.get("*", (_, res) => {
  sendHTML(Routes.NotFound, res);
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
