import axios from "axios";
import React, { useState, useEffect } from "react"
 
function Home() {

    const [snippets, setSnippets] = useState([]);


    useEffect( () => {
        getSnippets();
    }, [] );


    async function getSnippets() {
        try {
            const response = await axios.get("http://localhost:5001/snippet");
            console.log(response); // Adjust according to the response structure
            setSnippets(response.data); // Update state if needed
        } catch (error) {
            console.error("Error fetching snippets:", error);
        }
    
    }


    return <div className="home">Home</div>
}

export default Home;