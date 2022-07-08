const userReducers = (state, action) => {
    switch (action.type) {
  
      // Get all movies
      case "GET_USERS_START":
        return {
          users: [],
          isFetching: true,
          error: false,
        };
      case "GET_USERS_SUCCESS":
        return {
          users: action.payload,
          isFetching: false,
          error: false,
        };
      case "GET_USERS_FAILURE":
        return {
          users: [],
          isFetching: false,
          error: true,
        };
  
      // Delete movie 
      case "DELETE_USER_START":
        return {
          ...state,
          isFetching: true,
        };
      case "DELETE_USER_SUCCESS":
        console.log(action.payload)  
        return {
          ...state,
          isFetching: false,
          users: state.users.filter((user) => user._id !== action.payload),
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
              users:[...state.users,action.users],
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
          const index=state.users.findIndex(user=>user._id===action.payload._id)
          const updatedUsers=[...state.users];
          updatedUsers[index]=action.payload;
          console.log(updatedUsers)
          return{
              users:updatedUsers,
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
  export default userReducers;
  