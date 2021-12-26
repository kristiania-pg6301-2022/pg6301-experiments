import * as React from "react";
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {useNavigate} from "react-router";

export function Books() {
    const [books, setBooks] = useState([]);

    useEffect(async () => {
        const res = await fetch("/api/books");
        setBooks(await res.json());
    })


    function handleAddBook(book) {
        books.push(book);
        setBooks(books);
    }


    return <>
        <Routes>
            <Route path={"/"} element={<ListBooks books={books}/>}/>
            <Route path={"create"} element={<CreateNewBook onAddBook={handleAddBook}/>}/>
        </Routes>
    </>;
}

export function CreateNewBook({onAddBook}) {
    const navigate = useNavigate();

    function handleSubmit() {
        onAddBook({author, title, year});
        navigate("..");
    }

    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");

    return <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Author: <input data-testid="author" value={author} onChange={e => setAuthor(e.target.value)}/></label>
            </div>
            <div>
                <label>Title: <input data-testid="title" value={title} onChange={e => setTitle(e.target.value)}/></label>
            </div>
            <div>
                <label>Year: <input data-testid="year" value={year} onChange={e => setYear(e.target.value)}/></label>
            </div>
            <button>Submit</button>
            <div>
                <pre>{JSON.stringify({year, title, author}, undefined, "  ")}</pre>
            </div>
        </form>
    </div>;
}

export function ListBooks({books}) {
    return <div>
        <h1>{books.length} books</h1>
        {books.map(({author, id, title, year}) => <div key={id}>{author}: {title} ({year})</div>)}
    </div>;
}

