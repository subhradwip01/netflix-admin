// Get all movies
export const getUsersStart=()=>({
    type:"GET_USERS_START"
})
export const getUsersSuccess=(users)=>({
    type:"GET_USERS_SUCCESS",
    payload:users
})
export const getUsersFailure=(message)=>({
    type:"GET_USER_FAILURE",
    payload:message
})

// Delete a movie
export const deleteUserStart=()=>({
    type:"DELETE_USER_START"
})
export const deleteUserSuccess=(userId)=>({
    type:"DELETE_USER_SUCCESS",
    payload:userId
})
export const deleteUserFailure=(message)=>({
    type:"DELETE_USER_FALUERE",
    payload:message
})

// Upadate a movie
export const upadteUserStart=()=>({
    type:"UPADTE_USER_START"
})
export const upadteUserSuccess=(user)=>({
    type:"UPADTE_USER_SUCCESS",
    payload:user
})
export const upadteUserFailuer=(message)=>({
    type:"UPADTE_USER_FAILURE",
    payload:message
})

// Create a new movie
export const createUserStart=()=>({
    type:"CREATE_USER_START"
})
export const createUserSuccess=(user)=>({
    type:"CREATE_USER_SUCCESS",
    payload:user
})
export const createUserFailuer=(message)=>({
    type:"CREATE_USER_FAILURE",
    payload:message
})