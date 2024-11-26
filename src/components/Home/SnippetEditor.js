import React, { useState } from "react";
import axios from "axios";

function SnippetEditor(props) {
    const [editorTitle, setEditorTitle] = useState("");
    const [editorDescription, setEditorDescription] = useState("");
    const [editorCode, setEditorCode] = useState("");


    async function submitForm(e) {
        // By default there is refresh
        e.preventDefault();
        
        const snippetData = {
            title: editorTitle ? editorTitle : undefined,
            description: editorDescription ? editorDescription : undefined,
            code: editorCode ? editorCode : undefined
        }

        await axios.post("http://localhost:5001/snippet", snippetData);
        
        closeEditor();
        
        props.getSnippets();
    }

    function closeEditor() {
        props.setEditorOpen(false);
        setEditorCode("");
        setEditorDescription("");
        setEditorTitle("");
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