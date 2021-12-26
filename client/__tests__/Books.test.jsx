import * as React from "react";
import * as ReactDOM from "react-dom";
import {act} from "react-dom/test-utils";

import {CreateNewBook} from "../src/books";
import {MemoryRouter} from "react-router";

describe("Books", () => {

    it("shows create book form", async () => {
        const container = document.createElement("div");
        await act(() => {
            ReactDOM.render(
                <MemoryRouter><CreateNewBook /></MemoryRouter>,
                container
            )
        })
        expect(container.innerHTML).toMatchSnapshot();
    })



})
