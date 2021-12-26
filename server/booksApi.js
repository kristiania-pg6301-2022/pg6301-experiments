const express = require("express");

const router = express.Router();

const books = [
    {
        id: 1, author: "Johannes", title: "Some title", year: 2020
    }
];

router.get("", (req, res) => {
    res.json(books).end();
})


router.post("", async(req, res) => {
    const {title, author, year} = req.body;
    books.push({title, author, year, id: books.length});
    res.status(200).end();
})

module.exports = router;
