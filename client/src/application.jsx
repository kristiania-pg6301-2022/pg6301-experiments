import * as React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Books} from "./books";

function ApplicationHeader() {
    return <header><h1>Kristiania Library</h1></header>;
}

function ApplicationMenu() {
    return <nav>
        <ul>
            <li><Link to={"books"}>View books</Link></li>
            <li>View authors</li>
            <li><Link to={"books/create"}>Add book</Link></li>
        </ul>
    </nav>;
}

function ApplicationMain() {
    return <main>
        <div>
            <Routes>
                <Route path={"/"} element={<h1>Welcome</h1>}/>
                <Route path={"books/*"} element={<Books/>}/>
                <Route path={"*"} element={<h1>Not found</h1>}/>
            </Routes>
        </div>
    </main>;
}

export function Application() {
    return <BrowserRouter>
        <main>
            <ApplicationHeader/>
            <ApplicationMenu/>
            <ApplicationMain/>
        </main>
    </BrowserRouter>
}

