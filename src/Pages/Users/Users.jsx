import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "../../components/DataTable/DataTable";
import "./Users.css";
import { deleteUser, getUsers } from "../../context/userConetxt/apiCalls";
import { UserContext } from "../../context/userConetxt/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
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
  return (
    <div className="users">
      <Link to="/new-user">
          <button className="productAddButton">Create</button>
      </Link>
      {!isFetching && data.length<1 && <h1>No Movies found</h1>}
      {!isFetching && data && data.length > 0 && (
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
