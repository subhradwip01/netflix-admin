import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "../../components/DataTable/DataTable";
import "./Users.css";
import { deleteUser, getUsers } from "../../context/userConetxt/apiCalls";
import { UserContext } from "../../context/userConetxt/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
const Users = () => {
  const {
    users: data,
    isFetching,
    error,
    dispatch,
  } = useContext(UserContext);
  
  console.log(data);
  useEffect(() => {
    getUsers(dispatch);
  }, []);

  const deleteHandler = async (id) => {
    await deleteUser(dispatch, id);
  };
  console.log(data)
  if(isFetching){
    return <Loader/>
  }
  return (
    <div className="users">
      <Link to="/new-user">
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
          data={data}
          isDeleteing={isFetching}
        />
      )}
    </div>
  );
};

export default Users;
