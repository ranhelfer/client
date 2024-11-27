import React, { useState, useEffect } from "react";
import axios from "axios";

function SnippetEditor( {getSnippets, setEditorOpen, snippetPreFillData, setSnippetPreFillData} ) {
    const [editorTitle, setEditorTitle] = useState("");
    const [editorDescription, setEditorDescription] = useState("");
    const [editorCode, setEditorCode] = useState("");


    useEffect( () => {
        console.log("i am here useEffect SnippetEditor")
        if (snippetPreFillData) {
            if (snippetPreFillData.title) setEditorTitle(snippetPreFillData.title);
            if (snippetPreFillData.description) setEditorDescription(snippetPreFillData.description);
            if (snippetPreFillData.code) setEditorCode(snippetPreFillData.code);
        }
    }, [snippetPreFillData]);


    async function submitForm(e) {
        // By default there is refresh
        e.preventDefault();

        const snippetData = {};
        if (editorTitle) snippetData.title = editorTitle;
        if (editorDescription) snippetData.description = editorDescription;
        if (editorCode) snippetData.code = editorCode;

        try {
            console.log("Payload being sent:", snippetData);
            if (snippetPreFillData == null) {
                await axios.post("http://localhost:5001/snippet", snippetData);
            } else {
                await axios.put(`http://localhost:5001/snippet/${snippetPreFillData._id}`, snippetData)
            }

            setSnippetPreFillData(null);
            closeEditor();
            getSnippets();
        } catch (error) {
            console.error("Error while posting snippet:", error.response?.data || error.message);
        }


    }

    function closeEditor() {
        setEditorOpen(false)
        setEditorCode("");
        setEditorDescription("");
        setEditorTitle("");
       // setSnippetPreFillData(null);
    }

    return <div className="snippet-editor">

        <form onSubmit={submitForm}>
            <label htmlFor="editor-title">Title</label>
            <input id="editor-title"
                type="text"
                value={editorTitle}
                onChange={(e) =>
                    setEditorTitle(e.target.value)
                } />

            <label htmlFor="editor-description">Description</label>
            <input id="editor-description" type="text"
                value={editorDescription}
                onChange={(e) =>
                    setEditorDescription(e.target.value)
                } />

            <label htmlFor="editor-code">Code</label>
            <textarea id="editor-code" type="text"
                value={editorCode}
                onChange={(e) =>
                    setEditorCode(e.target.value)
                }
            />

            <button type="submit">Save snippet</button>
            <button type="button" onClick={closeEditor}>Cancel</button>
        </form>

    </div>
}



export default SnippetEditor;