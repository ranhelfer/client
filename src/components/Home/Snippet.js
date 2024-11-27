import React from "react"
import axios from "axios";
import "./Snippet.scss";

function Snippet({snippet, getSnippets, editSnippet}) {

    async function deleteSnippet() {
        await axios.delete(`http://localhost:5001/snippet/${snippet._id}`)
        await getSnippets()
    }

    return <div className="snippet">
        {snippet.title && <h2 className="title">{snippet.title}</h2>}
        {snippet.description && <p className="description">{snippet.description}</p>}
        {snippet.code && <pre className="code"><code>{snippet.code}</code></pre>}
        <button className="btn-edit" onClick={() =>  editSnippet(snippet)}>Edit</button>
        <button className="btn-delete" onClick={deleteSnippet}>Delete</button>
        </div>;
}

export default Snippet;