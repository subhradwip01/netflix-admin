import AuthReducer from "./AuthReducers";
import {createContext,useReducer,useEffect} from "react"
const INITIAL_STATE={
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching:false,
    error:false
}

const AuthContext=createContext(INITIAL_STATE);
const AuthContextProvider=({children})=>{
    const [state,dispatch]=useReducer(AuthReducer,INITIAL_STATE)
    useEffect(() => {
      localStorage.setItem("user",JSON.stringify(state.user))
    }, [state.user])
    return(
        <AuthContext.Provider value={{
            ...state,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider