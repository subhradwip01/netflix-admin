import { createContext, useReducer } from "react";
import UserReducers from "./UserReducers";

const INITIAL_STATE = {
  users: [],
  isFetching: false,
  error: {
    has:false,
    message:""
  },
};

export const UserContext = createContext(INITIAL_STATE);
const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducers, INITIAL_STATE);
  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
