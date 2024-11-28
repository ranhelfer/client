import axios from "axios";
import React, { useState, useEffect } from "react";
import Snippet from "./Snippet";
import SnippetEditor from "./SnippetEditor";

import "./Home.scss";

function Home() {

    const [snippets, setSnippets] = useState([]);
    const [editorOpen, setEditorOpen] = useState(false);
    const [editedSnippetData, setEditedSnippetData] = useState(null);

    useEffect( () => {
        getSnippets();
    }, []);


    async function getSnippets() {
        try {
            const response = await axios.get("http://localhost:5001/snippet");
            console.log(response); // Adjust according to the response structure
            setSnippets(response.data); // Update state if needed
            setEditedSnippetData(null);
        } catch (error) {
            console.error("Error fetching snippets:", error);
        }
    
    }

    function editSnippet(snippetData) {
        setEditedSnippetData(snippetData)
        setEditorOpen(true)
    }

    function render(props) {

        let sortedSnippets = [...snippets]; // ... put all elements in an array
        
        // We do not want to iterate directly over snippets

        sortedSnippets = sortedSnippets.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return sortedSnippets.map((snippet, i) => {
            return <Snippet key={i} snippet={snippet} 
                                    getSnippets={getSnippets} 
                                    editSnippet={editSnippet}/>
        });
    }

    return <div className="home">
        
        {!editorOpen && <button className="btn-editor-toggle" onClick={() => {
            setEditedSnippetData(null);
            setEditorOpen(true)
        }}>Add Snippet</button>}

        {editorOpen && (<SnippetEditor  getSnippets={getSnippets} 
                                        setEditorOpen={setEditorOpen} 
                                        snippetPreFillData={editedSnippetData}
                                        setSnippetPreFillData={setEditedSnippetData}/>)}

        {render()}
        
        </div>
}

export default Home;