import axios from "axios";
import React, { createContext, useEffect, useState } from "react"

const UserContext = createContext();

function UserContextProvider(props) {
    const [user, setUser] = useState(undefined);

    async function getUser() {
        const userResponse = await axios.get("http://localhost:5001/auth/loggedIn");
        setUser(userResponse.data);
    }

    useEffect(() => {
        getUser();
    }, []);

    return <UserContext.Provider value={{user, getUser}}>{props.children}</UserContext.Provider>;
}

export {UserContextProvider};
export default UserContext;