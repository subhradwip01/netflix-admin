import "./ListMenu.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ListContext } from "../../context/ListContext/ListContext"
import { deleteList, getLists } from "../../context/ListContext/apiCalls";

const ListMenu=()=> {
  const { lists, dispatch,isFetching,error } = useContext(ListContext);
  
 console.log(lists)
  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);
  
  
  
  const handleDelete = (id) => {
    deleteList(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "title", width: 250 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "type", headerName: "type", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/lists/${params.row._id}`} state={{list:params.row}}>
                        <button className="productListEdit">Edit</button>
                    </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <Link to="/newList">
          <button className="productAddButton">Create</button>
      </Link>
      {
        error.has && (
          <div className="errMsg">{ error.message}</div>
        )}
      {!isFetching && lists.length<1 && <h1>No Movie Lists found</h1>}
      {lists.length>0 && <DataGrid
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />}
    </div>
  );
}

export default ListMenu