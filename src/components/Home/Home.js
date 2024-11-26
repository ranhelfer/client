import axios from "axios";
import React, { useState, useEffect } from "react";
import Snippet from "./Snippet";

function Home() {

    const [snippets, setSnippets] = useState([]);
    const [editorOpen, setEditorOpen] = useState(false);
    const [editorTitle, setEditorTitle] = useState("");
    const [editorDescription, setEditorDescription] = useState("");
    const [editorCode, setEditorCode] = useState("");

    useEffect( () => {
        getSnippets();
    }, []);


    async function getSnippets() {
        try {
            const response = await axios.get("http://localhost:5001/snippet");
            console.log(response); // Adjust according to the response structure
            setSnippets(response.data); // Update state if needed
        } catch (error) {
            console.error("Error fetching snippets:", error);
        }
    
    }

    function render(props) {

        let sortedSnippets = [...snippets]; // ... put all elements in an array
        
        // We do not want to iterate directly over snippets

        sortedSnippets = sortedSnippets.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return sortedSnippets.map((snippet, i) => {
            return <Snippet key={i} snippet={snippet}/>
        });
    }

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
        
        getSnippets();
    }

    function closeEditor() {
        setEditorOpen(false);
        setEditorCode("");
        setEditorDescription("");
        setEditorTitle("");
    }

    return <div className="home">
        
        {!editorOpen && <button onClick={() => {
            setEditorOpen(true)
        }}>Add Snippet</button>}

        {editorOpen && <div className="snippet-editor">

                <form onSubmit={submitForm}>
                   <label htmlFor="editor-title">Title</label>
                   <input id="editor-title" 
                   type="text" 
                   value={editorTitle} 
                   onChange={ (e) => 
                    setEditorTitle(e.target.value)
                   }/> 

                   <label htmlFor="editor-description">Description</label>
                   <input id="editor-description" type="text" 
                   value={editorDescription} 
                   onChange={ (e) => 
                    setEditorDescription(e.target.value)
                   }/> 

                   <label htmlFor="editor-code">Code</label>
                   <textarea id="editor-code" type="text" 
                   value={editorCode} 
                   onChange={ (e) => 
                    setEditorCode(e.target.value)
                   }
                   /> 

                   <button type="submit">Save snippet</button>
                   <button type="button" onClick={closeEditor}>Cancel</button>
                </form>

            </div>}
        {render()}
        
        </div>
}

export default Home;