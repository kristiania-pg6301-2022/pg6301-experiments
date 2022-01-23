import * as React from "react";
import * as ReactDOM from "react-dom";

import { Application } from "./application";

ReactDOM.render(
  <Application greeting={"Hi"} someone={"World"} />,
  document.getElementById("app")
);
