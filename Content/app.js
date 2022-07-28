"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routing_1 = require("./routes/routing");
const enums_1 = require("./types/enums");
const app = (0, express_1.default)();
const port = 3000;
app.get("/", (_, res) => {
    (0, routing_1.sendHTML)(enums_1.Routes.Index, res);
});
app.get("/status", (_, res) => {
    (0, routing_1.sendHTML)(enums_1.Routes.Status, res);
});
app.get("*", (_, res) => {
    (0, routing_1.sendHTML)(enums_1.Routes.NotFound, res);
});
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
