import * as React from "react";
import * as ReactDOM from "react-dom";
import { Application } from "../application";

describe("application", () => {
  it("renders", () => {
    const element = document.createElement("div");
    ReactDOM.render(
      <Application greeting={"Hello"} someone="React" />,
      element
    );
    expect(element.innerHTML).toMatchSnapshot();
  });
});
