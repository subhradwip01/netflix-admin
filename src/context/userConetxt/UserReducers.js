const userReducers = (state, action) => {
    switch (action.type) {
  
      // Get all movies
      case "GET_USERS_START":
        return {
          users: [],
          isFetching: true,
          error: {
            has:false,
            message:""
          },
        };
      case "GET_USERS_SUCCESS":
        return {
          users: action.payload,
          isFetching: false,
          error: {
            has:false,
            message:""
          },
        };
      case "GET_USERS_FAILURE":
        return {
          users: [],
          isFetching: false,
          error: {
            has:true,
            message:action.payload
          },
        };
  
      // Delete movie 
      case "DELETE_USER_START":
        return {
          ...state,
          isFetching: true,
          error: {
            has:false,
            message:""
          },
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
          error: {
            has:true,
            message:action.payload
          },
        };
  
  
      // Create movie
      case "CREATE_USER_START":
          return{
              ...state,
              isFetching:true,
              error: {
                has:false,
                message:""
              },
          }
      case "CREATE_USER_SUCCESS":
          return{
              users:[...state.users,action.payload],
              isFetching:false,
              error: {
                has:false,
                message:""
              },
          }
      case "CREATE_USER_FAILURE":
        console.log(action.payload)
          return{
              ...state,
              isFetching:false,
              error: {
                has:true,
                message:action.payload
              },
          }
      // Upadate movie
      case "UPADTE_USER_START":
          return{
              ...state,
              isFetching:true,
              error: {
                has:false,
                message:""
              },
          }
      case "UPADTE_USER_SUCCESS":
          const index=state.users.findIndex(user=>user._id===action.payload._id)
          const updatedUsers=[...state.users];
          updatedUsers[index]=action.payload;
          console.log(updatedUsers)
          return{
              users:updatedUsers,
              isFetching:false,
              error: {
                has:false,
                message:""
              },
          }
      case "UPADTE_USER_FAILURE":
          return{
              ...state,
              isFetching:false,
              error: {
                has:true,
                message:action.payload
              },
          }
  
      default:
        return { ...state };
    }
  };
  export default userReducers;
  