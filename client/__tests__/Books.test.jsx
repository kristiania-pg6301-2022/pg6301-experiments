import * as React from "react";
import * as ReactDOM from "react-dom";
import {act} from "react-dom/test-utils";

import {Books, CreateNewBook, ListBooks} from "../src/books";
import {MemoryRouter} from "react-router";

describe("Books", () => {

    it("shows create book form", async () => {
        const container = document.createElement("div");
        await act(async () => {
            ReactDOM.render(
                <MemoryRouter><CreateNewBook/></MemoryRouter>,
                container
            )
        })
        expect(container.innerHTML).toMatchSnapshot();
    });

    it("shows book list", async () => {
        const books = [
            {id: 1, author: "Johannes", title: "React lectures", year: 2021},
            {id: 2, author: "Johannes", title: "Java lectures", year: 2021},
        ];
        const container = document.createElement("div");
        await act(async () => {
            ReactDOM.render(<ListBooks books={books}/>, container)
        })
        expect(container.innerHTML).toMatchSnapshot();
    });

});

