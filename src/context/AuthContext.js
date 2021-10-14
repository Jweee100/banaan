import React, {createContext, useState} from "react";
import { useHistory } from 'react-router-dom';

// 1.context maken
export const AuthContext = createContext({})

// 2.custom provider maken
//3. wikkel provider component om <App />
function AuthContextProvider({ children }) {

    const history = useHistory();
    // 5.state maken
    const [isAuth, toggleIsAuth] = useState(false)

    // 9. & 11.functies maken
    function logIn(){
        toggleIsAuth(true);
        console.log('Gebruiker is ingelogd!');
        history.push('/profile');
    }

    function logOut(){
        toggleIsAuth(false);
        console.log('Gebruiker is uitgelogd!');
        history.push('/');
    }

    //4.data beschrijven die oor iedereen beschikbaar is
    //9.functie in data object
    const contextData = {
        isAuth: isAuth,
        logInFunction: logIn,
        logOutFunction: logOut,
    }

    return (
        <AuthContext.Provider value={contextData}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
