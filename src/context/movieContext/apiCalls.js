import axios from "axios";
import {
  getMoviesStart,
  getMoviesSuccess,
  getMoviesFailure,
  deleteMoviesStart,
  deleteMoviesSuccess,
  deleteMoviesFailure,
  createMovieStart,
  createMovieSuccess,
  createMovieFailuer,
  upadteMovieFailuer,
  upadteMovieStart,
  upadteMovieSuccess,
} from "./MovieActions";

export const getMovies = async (dispatch, token) => {
  dispatch(getMoviesStart());

  try {
    const res = await axios.get("/movies", {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
      },
    });
    let movies = [];
    res.data.allMovies.map((movie) =>
      movies.push({
        id: movie._id,
        img: movie.imgBanner
          ? movie.imgBanner:"",
        imgTitle: movie.imgTitle,
        imgThumbnai: movie.imgThumbnail,
        title: movie.title,
        genre: movie.genre ? movie.genre : "undefined",
        year: movie.year ? movie.year : "null",
        limit: movie.limit ? movie.limit : "null",
        isSeries: movie.isSeries,
        video: movie.video,
        trailer: movie.trailer,
      })
    );
    dispatch(getMoviesSuccess(movies));
  } catch (error) {
    dispatch(getMoviesFailure());
    console.log(error);
  }
};

export const deleteMovies = async (dispatch, id, token) => {
  dispatch(deleteMoviesStart());
  console.log(id);
  try {
    await axios.delete(`/movies/${id}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
      },
    });
    dispatch(deleteMoviesSuccess(id));
  } catch (error) {
    dispatch(deleteMoviesFailure);
  }
};

// add movie
export const createMovie = async (dispatch, m, token) => {
  dispatch(createMovieStart());
  console.log("Inside api")
  try {
    const res = await axios.post('/movies/add', m, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
      },
    });
    const movie = res.data.movie;
    const newMovie = {
      id: movie._id,
      img: movie.imgBanner
        ? movie.imgBanner
        : "",
      imgTitle: movie.imgTitle,
      imgThumbnai: movie.imgThumbnail,
      title: movie.title,
      genre: movie.genre ? movie.genre : "undefined",
      year: movie.year ? movie.year : "null",
      limit: movie.limit ? movie.limit : "null",
      isSeries: movie.isSeries,
      video: movie.video,
      trailer: movie.trailer,
    };
    dispatch(createMovieSuccess(newMovie));
  } catch (error) {
    console.log(error)
    dispatch(createMovieFailuer());
  }
};

export const upadateMovie= async (dispatch,m,token)=>{
  try {
    dispatch(upadteMovieStart);
    const {id,...movieDesc}=m;
    const res=await axios.put(`/movies/${id}`,movieDesc, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
      },
    });
    const movie = res.data.updatedMovie;
    const uMovie = {
      id: movie._id,
      img: movie.imgBanner
        ? movie.imgBanner
        : "",
      imgTitle: movie.imgTitle,
      imgThumbnai: movie.imgThumbnail,
      title: movie.title,
      genre: movie.genre ? movie.genre : "undefined",
      year: movie.year ? movie.year : "null",
      limit: movie.limit ? movie.limit : "null",
      isSeries: movie.isSeries,
      video: movie.video,
      trailer: movie.trailer,
    };
    dispatch(upadteMovieSuccess(uMovie));
  } catch (error) {
    dispatch(upadteMovieFailuer)
  }
}