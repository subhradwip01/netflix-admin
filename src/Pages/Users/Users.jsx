import React,{useState} from 'react'
import DataTable from '../../components/DataTable/DataTable'
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
    
    return (
        <div className='users'>
            <DataTable onDelete={deleteHandler} type="users" data={data}/>
        </div>
    )
}

export default Users