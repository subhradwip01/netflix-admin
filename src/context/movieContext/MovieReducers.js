const MovieReducers = (state, action) => {
  switch (action.type) {

    // Get all movies
    case "GET_MOVIES_START":
      return {
        movies: [],
        isFetching: true,
        error: false,
      };
    case "GET_MOVIES_SUCCESS":
      return {
        movies: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_MOVIES_FAILURE":
      return {
        movies: [],
        isFetching: false,
        error: true,
      };

    // Delete movie 
    case "DELETE_MOVIES_START":
      return {
        ...state,
        isFetching: true,
      };
    case "DELETE_MOVIES_SUCCESS":
      console.log(action.payload)  
      return {
        ...state,
        isFetching: false,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };
    case "DELETE_MOVIES_FALUERE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };


    // Create movie
    case "CREATE_MOVIE_START":
        return{
            ...state,
            isFetching:true,
        }
    case "CREATE_MOVIE_SUCCESS":
        return{
            movies:[...state.movies,action.payload],
            isFetching:false,
            error:false
        }
    case "CREATE_MOVIE_FAILURE":
        return{
            ...state,
            isFetching:false,
            error:true
        }
    // Upadate movie
    case "UPADTE_MOVIE_START":
        return{
            ...state,
            isFetching:true,
        }
    case "UPADTE_MOVIE_SUCCESS":
        const index=state.movies.findIndex(movie=>movie.id===action.payload.id)
        const updatedMovies=[...state.movies];
        updatedMovies[index]=action.payload;
        console.log(updatedMovies)
        return{
            movies:updatedMovies,
            isFetching:false,
            error:false
        }
    case "UPADTE_MOVIE_FAILURE":
        return{
            ...state,
            isFetching:false,
            error:true
        }

    default:
      return { ...state };
  }
};
export default MovieReducers;
