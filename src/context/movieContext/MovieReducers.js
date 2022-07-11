const MovieReducers = (state, action) => {
  switch (action.type) {

    // Get all movies
    case "GET_MOVIES_START":
      return {
        movies: [],
        isFetching: true,
        error: {
          has:false,
          message:"",
        },
      };
    case "GET_MOVIES_SUCCESS":
      return {
        movies: action.payload,
        isFetching: false,
        error: {
          has:false,
          message:"",
        },
      };
    case "GET_MOVIES_FAILURE":
      return {
        movies: [],
        isFetching: false,
        error: {
          has:true,
          message:action.payload,
        },
      };

    // Delete movie 
    case "DELETE_MOVIES_START":
      return {
        ...state,
        isFetching: true,
        error: {
          has:false,
          message:"",
        },
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
        error: {
          has:true,
          message:action.payload,
        },
      };


    // Create movie
    case "CREATE_MOVIE_START":
        return{
            ...state,
            isFetching:true,
            error: {
              has:false,
              message:"",
            },
        }
    case "CREATE_MOVIE_SUCCESS":
        return{
            movies:[...state.movies,action.payload],
            isFetching:false,
            error: {
              has:false,
              message:"",
            },
        }
    case "CREATE_MOVIE_FAILURE":
        return{
            ...state,
            isFetching:false,
            error: {
              has:true,
              message:action.payload,
            },
        }
    // Upadate movie
    case "UPADTE_MOVIE_START":
        return{
            ...state,
            isFetching:true,
            error: {
              has:false,
              message:"",
            },
        }
    case "UPADTE_MOVIE_SUCCESS":
        const index=state.movies.findIndex(movie=>movie.id===action.payload.id)
        const updatedMovies=[...state.movies];
        updatedMovies[index]=action.payload;
        console.log(updatedMovies)
        return{
            movies:updatedMovies,
            isFetching:false,
            error: {
              has:false,
              message:"",
            },
        }
    case "UPADTE_MOVIE_FAILURE":
        return{
            ...state,
            isFetching:false,
            error: {
              has:true,
              message:action.payload,
            },
        }

    default:
      return { ...state };
  }
};
export default MovieReducers;
