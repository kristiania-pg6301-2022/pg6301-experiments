const request = require("supertest");
const express = require("express");

const app = express();
app.use(require("body-parser").json());
app.use(require("../booksApi"));

describe("books api", () => {

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
