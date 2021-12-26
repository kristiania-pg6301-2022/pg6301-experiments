const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const books = [
    {
        id: 1, author: "Johannes", title: "Some title", year: 2020
    }
];

app.get("/api/books", (req, res) => {
    res.json(books).end();
})


app.post("/api/books", async(req, res) => {
    const {title, author, year} = req.body;
    books.push({title, author, year, id: books.length});
    res.status(200).end();
})


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


