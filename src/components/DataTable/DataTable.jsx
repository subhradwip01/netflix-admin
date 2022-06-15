import React from 'react'
import "./DataTable.css";
import { Delete, Edit } from "@material-ui/icons"
import { Link } from 'react-router-dom'
import { DataGrid } from '@material-ui/data-grid';

const DataTable = ({onDelete,data,type}) => {

    const fieldSetMovie = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'movie', headerName: 'Movie', width: 200, renderCell: (params) => {
                return (
                    <div className='dataTitle'>
                        <img src={params.row.img} alt="" srcset="" />{params.row.title}
                    </div>
                )
            }
        },
        { field: "genre", headerName: "Genre", width: 120 },
        { field: "year", headerName: "Year", width: 120 },
        { field: "limit", headerName: "Limit", width: 120 },
        { field: "isSeries", headerName: "isSeries", width: 120 },
        {
            field: "action", headerName: "Action", width: 150, renderCell: params => {
               return( <>
                    <Link to={`/movies/${params.row.id}`}>
                        <button className="dataEdit"><Edit />Edit</button>
                    </Link>
                    <Delete className="dataDelete" onClick={() => onDelete(params.row.id)} />
                </>
               )
            }
        }

    ];

    const fieldSetUser = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'Username', width: 230 ,renderCell:(params)=>{
            return (
                <div className='dataTitle'>
                    <img src={params.row.avatar} alt="" srcset="" />{params.row.userName}
                </div>
            )
        }},
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field:"action",
            headerName:"Acttion",
            width:170,
            renderCell:params=>{
               return (
                <>
                <Link to={`${params.row.id}`}>
                    <button className="dataEdit"><Edit/>Edit</button>
                </Link>
                <Delete  className='dataDelete' onClick={()=>onDelete(params.row.id)}/>
                </>
               ) 
            }
        }
        
    ];

    return (
            <DataGrid
                rows={data}
                columns={type==="movie"?fieldSetMovie:fieldSetUser}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
    )
}

export default DataTable