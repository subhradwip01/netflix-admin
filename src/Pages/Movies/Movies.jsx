import React, { useState } from 'react'
import "./Movies.css";
import { Delete, Edit } from "@material-ui/icons"
import { Link } from 'react-router-dom'
import { DataGrid } from '@material-ui/data-grid';
const rows = [
    { id: 1, img: "https://www.cheatsheet.com/wp-content/uploads/2019/12/money-heist-banner.png", title: "Money Heist", genre: "Thriller", year: 2020, limit: 16, isSeries: "True" },
    { id: 2, img: "https://www.cheatsheet.com/wp-content/uploads/2019/12/money-heist-banner.png", title: "Money Heist", genre: "Thriller", year: 2020, limit: 16, isSeries: "True" },
    { id: 3, img: "https://www.cheatsheet.com/wp-content/uploads/2019/12/money-heist-banner.png", title: "Money Heist", genre: "Thriller", year: 2020, limit: 16, isSeries: "True" },
    { id: 4, img: "https://www.cheatsheet.com/wp-content/uploads/2019/12/money-heist-banner.png", title: "Money Heist", genre: "Thriller", year: 2020, limit: 16, isSeries: "True" },
    { id: 5, img: "https://www.cheatsheet.com/wp-content/uploads/2019/12/money-heist-banner.png", title: "Money Heist", genre: "Thriller", year: 2020, limit: 16, isSeries: "True" },
    { id: 6, img: "https://www.cheatsheet.com/wp-content/uploads/2019/12/money-heist-banner.png", title: "Money Heist", genre: "Thriller", year: 2020, limit: 16, isSeries: "True" },
    { id: 7, img: "https://www.cheatsheet.com/wp-content/uploads/2019/12/money-heist-banner.png", title: "Money Heist", genre: "Thriller", year: 2020, limit: 16, isSeries: "True" },

]
const Movies = () => {
    const [data, setData] = useState(rows || [])

    const deleteHandler = (id) => {
        let newD = data.filter(d => d.id !== id);
        setData(newD)
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'movie', headerName: 'Movie', width: 200, renderCell: (params) => {
                return (
                    <div className='movieTitle'>
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
                        <button className="moviesEdit"><Edit />Edit</button>
                    </Link>
                    <Delete className="moviesDelete" onClick={() => deleteHandler(params.row.id)} />
                </>
               )
            }
        }

    ];
    return (
        <div className="movies">
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

export default Movies