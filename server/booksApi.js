const express = require("express");

function booksApi(db) {
    const router = express.Router();
    const collection = db.collection("books");

    router.get("", (req, res) => {
        collection
            .find({})
            .map(({_id, title, author, year}) => ({id: _id, title, author, year}))
            .toArray()
            .then(result => res.json(result).end());
    })

    router.post("", async(req, res) => {
        const {title, author, year} = req.body;

        await collection.insertOne({
            title, author, year
        });

        res.status(200).end();
    });

    return router;
}

module.exports = booksApi;
