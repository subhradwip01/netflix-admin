import React, { useState, useEffect, useContext } from "react";
import "./Movies.css";
import DataTable from "../../components/DataTable/DataTable";
import { getMovies, deleteMovies } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContetxt";
import { AuthContext } from "../../context/authContext/AuthContext";

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


  // if (error) return "Sorry unable to get any movies";

  return (
    <div className="movies">
      {data.length<1 && <h1>No Movies found</h1>}
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
