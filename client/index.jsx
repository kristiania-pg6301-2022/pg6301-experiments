import * as ReactDOM from "react-dom";
import * as React from "react";
import {Application} from "./src/application";

import "./style.css";

ReactDOM.render(
    <React.StrictMode>
        <Application/>
    </React.StrictMode>,
    document.getElementById("app"))
;
