import axios from "axios";
import React, { createContext, useEffect, useState } from "react"
import domain from "../components/util/domain"

const UserContext = createContext();

function UserContextProvider(props) {
    
    console.log("host is " + domain);

    const [user, setUser] = useState(undefined);

    async function getUser() {
        const userResponse = await axios.get(`${domain}/auth/loggedIn`);
        console.log("userResponse " + userResponse.data)
        setUser(userResponse.data);
    }

    useEffect(() => {
        getUser();
    }, []);

    return <UserContext.Provider value={{user, getUser}}>{props.children}</UserContext.Provider>;
}

export {UserContextProvider};
export default UserContext;