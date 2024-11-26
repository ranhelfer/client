import axios from "axios";
import React, { useState, useEffect } from "react";
import Snippet from "./Snippet";
import SnippetEditor from "./SnippetEditor";


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
        } catch (error) {
            console.error("Error fetching snippets:", error);
        }
    
    }

    function editSnippet(snippetData) {
        setEditedSnippetData(snippetData)
        console.log("i am edit")
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
        
        {!editorOpen && <button onClick={() => {
            setEditorOpen(true)
        }}>Add Snippet</button>}

        {editorOpen && (<SnippetEditor setEditorOpen={setEditorOpen} getSnippets={getSnippets}/>)}

        {render()}
        
        </div>
}

export default Home;