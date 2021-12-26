import * as React from "react";
import * as ReactDOM from "react-dom";
import {act} from "react-dom/test-utils";

import {Books, CreateNewBook, ListBooks} from "../src/books";
import {MemoryRouter} from "react-router";

async function render(component) {
    const container = document.createElement("div");
    await act(async () => {
        ReactDOM.render(component, container)
    });
    return container;
}


describe("Books", () => {

    it("shows create book form", async () => {
        const container = await render(<MemoryRouter><CreateNewBook/></MemoryRouter>);
        expect(container.innerHTML).toMatchSnapshot();
    });

    it("shows book list", async () => {
        const books = [
            {id: 1, author: "Johannes", title: "React lectures", year: 2021},
            {id: 2, author: "Johannes", title: "Java lectures", year: 2021},
        ];
        const container = await render(<ListBooks books={books}/>);
        expect(container.innerHTML).toMatchSnapshot();
    });

});

