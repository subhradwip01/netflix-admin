import {createContext,useReducer,useEffect} from "react"
import AuthReducer from "./AuthReducers";
import { logout } from "./AuthActions";
import { Navigate } from "react-router-dom";
const INITIAL_STATE={
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching:false,
    error:{
        has:false,
        message:""
    }
}

export const AuthContext=createContext(INITIAL_STATE);
const AuthContextProvider=({children})=>{
    const [state,dispatch]=useReducer(AuthReducer,INITIAL_STATE)
    
    useEffect(() => {  
      localStorage.setItem("user",JSON.stringify(state.user))
    }, [state.user])

    const onLogout=()=>{
        dispatch(logout())
        localStorage.removeItem("user");
    }

    return(
        <AuthContext.Provider value={{
            ...state,
            dispatch,
            onLogout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider