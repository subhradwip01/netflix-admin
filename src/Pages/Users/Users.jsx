import React,{useState} from 'react'
import { DataGrid } from '@material-ui/data-grid'
import {Delete,Edit} from "@material-ui/icons"
import { Link } from 'react-router-dom'
import "./Users.css"
const rows = [
    { id: 1,avatar:"https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500", userName: 'Snow',email:"xyz@gmail.com" },
    { id: 2,avatar:"https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500", userName: 'Snow',email:"xyz@gmail.com" },
    { id: 3,avatar:"https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500", userName: 'Snow',email:"xyz@gmail.com" },
    { id: 4,avatar:"https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500", userName: 'Snow',email:"xyz@gmail.com" },
    { id: 5,avatar:"https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500", userName: 'Snow',email:"xyz@gmail.com" },
    { id: 6,avatar:"https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500", userName: 'Snow',email:"xyz@gmail.com" },
    
];
const Users = () => {
    const [data,setData]=useState(rows || [])
   
    const deleteHandler=(id)=>{
        let newD=data.filter(d=>d.id!==id);
        setData(newD)
    }
    
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'Username', width: 230 ,renderCell:(params)=>{
            return (
                <div className='userTitle'>
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
                    <button className="usersEdit"><Edit/>Edit</button>
                </Link>
                <Delete  className='usersDelete' onClick={()=>deleteHandler(params.row.id)}/>
                </>
               ) 
            }
        }
        
    ];


    

    return (
        <div className='users'>
            <DataGrid 
            rows={data}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            />
        </div>
    )
}

export default Users