import { createContext, useReducer } from "react";
import MovieReducers from "./MovieReducers";

const INITIAL_STATE = {
  movies: [],
  isFetching: false,
  error: false,
};

export const MovieContext = createContext(INITIAL_STATE);
const MovieContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MovieReducers, INITIAL_STATE);
  return (
    <MovieContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
export default MovieContextProvider;
