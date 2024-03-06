import { useContext } from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext(); // creates intial context 'AuthContext' that will hold the AUTH State

export const useAuthContext = () => { // returns a context value object that includes setAuthUser, 
                                      // which can be called with a parameter to update the authentication state.
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => { // the JSON parse changes it from string to obj

    // this attempts to set authUser by using the current user in localStorage, if no logged in user, then null
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null)
    
    return <AuthContext.Provider value={{authUser, setAuthUser}}>
        {/* children represents the child components wrapped by AuthContext.Provider */}
        {/* allows all children within to access the AUTHENTICATION STATE OF THE USER */}
        {children} 
    </AuthContext.Provider>
}