import React, { useState, useEffect, useContext } from "react";
import "./Movies.css";
import DataTable from "../../components/DataTable/DataTable";
import { getMovies, deleteMovies } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContetxt";
import { AuthContext } from "../../context/authContext/AuthContext";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
const Movies = () => {
  // const [data, setData] = useState([]);

  const {
    movies: data,
    isFetching,
    error,
    dispatch,
  } = useContext(MovieContext);
  const { user } = useContext(AuthContext);

  const deleteHandler = async (id) => {
    await deleteMovies(dispatch, id, user.token);
  };
  console.log(data);
  useEffect(() => {
    getMovies(dispatch, user.token);
  }, []);


  if(isFetching) {
    return <Loader/>
  }

  // if (error) return "Sorry unable to get any movies";

  return (
    <div className="movies">
      <Link to="/new-movie">
          <button className="productAddButton">Create</button>
      </Link>
      {
        error.has && (
          <div className="errMsg">{ error.message}</div>
        )}
      {!isFetching && data.length<1 && <h1>No Movies found</h1>}
      {data && data.length > 0 && (
        <DataTable
          onDelete={deleteHandler}
          type="movie"
          data={data}
          isDeleteing={isFetching}
        />
      )}
    </div>
  );
};

export default Movies;
