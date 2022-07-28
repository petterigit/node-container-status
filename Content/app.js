import express from "express";
import path from "path";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
    const fileName = "index.html";
    const options = {
        root: path.join(process.cwd(), "public"),
    };
    res.sendFile(fileName, options);
});
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
