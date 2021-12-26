import * as React from "react";

function ApplicationHeader() {
    return <header><h1>Kristiania Library</h1></header>;
}

function ApplicationMenu() {
    return <nav>
        <ul>
            <li>View books</li>
            <li>View authors</li>
            <li>Add book</li>
        </ul>
    </nav>;
}

function ApplicationMain() {
    return <main>
        <div>
            Welcome
        </div>
    </main>;
}

export function Application() {
    return <main>
        <ApplicationHeader />
        <ApplicationMenu />
        <ApplicationMain />
    </main>
}

