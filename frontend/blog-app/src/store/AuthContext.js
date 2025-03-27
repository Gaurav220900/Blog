import React, { useState, useEffect, useContext, createContext } from 'react';
import api from '../api';
const AuthContext = createContext({
    isLoggedIn: false,
    getLoggedIn: () => {},
    logout: () => {}
});

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(undefined);

    
        
        async function getLoggedIn(user){
            console.log(user);
            setIsLoggedIn(user);
        }

        async function logout(){
            await api.get('/logout');
            setIsLoggedIn(false);
        }

        useEffect(() => {
            getLoggedIn();
        }, []);

    

    return (
        <AuthContext.Provider value={{ isLoggedIn, getLoggedIn, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

// export const useAuth = () => {
//     return useContext(AuthContext);
// };