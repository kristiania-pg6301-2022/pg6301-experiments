const express = require("express");
const path = require("path");


const app = express();

app.use(express.static(path.resolve(__dirname, "..", "client", "dist")));
app.use((req, res, next) => {
    if (req.method === "GET" && !req.path.startsWith("/api")) {
        res.sendFile(path.resolve(__dirname, "..", "client", "dist", "index.html"))
    } else {
        next();
    }
})

const server = app.listen(3000, () => {
    console.log("started at http://localhost:" + server.address().port)
})


