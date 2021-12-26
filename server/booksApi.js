const express = require("express");
const { MongoClient } = require("mongodb");
const { ATLAS_URL } = process.env;
const client = new MongoClient(ATLAS_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
});

const router = express.Router();

client.connect().then(conn => {
    const db = conn.db("library");

    router.get("", (req, res) => {
        db.collection("books")
            .find({})
            .map(({_id, title, author, year}) => ({id: _id, title, author, year}))
            .toArray()
            .then(result => res.json(result).end());
    })

    router.post("", async(req, res) => {
        const {title, author, year} = req.body;

        await db.collection("books").insertOne({
            title, author, year
        });

        res.status(200).end();
    })

})






module.exports = router;
