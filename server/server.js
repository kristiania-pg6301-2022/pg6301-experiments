require("dotenv").config();

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const booksApi = require("./booksApi");
const {MongoClient} = require("mongodb");

const app = express();
app.use(bodyParser.json());

const client = new MongoClient(process.env.ATLAS_URL);
client.connect()
    .then(conn => app.use("/api/books", booksApi(conn.db("library"))));


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


