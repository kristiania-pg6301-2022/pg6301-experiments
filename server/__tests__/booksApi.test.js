const request = require("supertest");
const express = require("express");

require("dotenv").config();
const {MongoClient} = require("mongodb");

const app = express();
app.use(require("body-parser").json());

describe("books api", () => {
    beforeAll(async () => {
        const client = new MongoClient(process.env.ATLAS_URL);
        const conn = await client.connect();
        await conn.db("testLibrary")
            .collection("books")
            .deleteMany({});
        app.use(require("../booksApi")(conn.db("testLibrary")));
    });

    it("can add a new book", async () => {
        await request(app)
            .post("/")
            .send({
                title: "My book", author: "Me", year: 2023
            })
            .expect(200);
        const response = await request(app).get("/");
        expect(response.body.map(({title}) => title))
            .toContain("My book");
    });
})
