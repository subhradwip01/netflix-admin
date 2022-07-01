// Get all movies
export const getMoviesStart=()=>({
    type:"GET_MOVIES_START"
})
export const getMoviesSuccess=(movies)=>({
    type:"GET_MOVIES_SUCCESS",
    payload:movies
})
export const getMoviesFailure=()=>({
    type:"GET_MOVIES_FAILURE"
})

// Delete a movie
export const deleteMoviesStart=()=>({
    type:"DELETE_MOVIES_START"
})
export const deleteMoviesSuccess=(movieId)=>({
    type:"DELETE_MOVIES_SUCCESS",
    payload:movieId
})
export const deleteMoviesFailure=()=>({
    type:"DELETE_MOVIES_FALUERE"
})

// Upadate a movie
export const upadteMovieStart=()=>({
    type:"UPADTE_MOVIE_START"
})
export const upadteMovieSuccess=(movie)=>({
    type:"UPADTE_MOVIE_SUCCESS",
    payload:movie
})
export const upadteMovieFailuer=()=>({
    type:"UPADTE_MOVIE_FAILURE"
})

// Create a new movie
export const createMovieStart=()=>({
    type:"CREATE_MOVIE_START"
})
export const createMovieSuccess=(movie)=>({
    type:"CREATE_MOVIE_SUCCESS",
    payload:movie
})
export const createMovieFailuer=()=>({
    type:"CREATE_MOVIE_FAILURE"
})