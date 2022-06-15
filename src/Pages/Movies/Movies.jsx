import React, { useState } from 'react'
import "./Movies.css";
import DataTable from '../../components/DataTable/DataTable';

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
    
    return (
        <div className="movies">
            <DataTable onDelete={deleteHandler} type="movie" data={data}/>
        </div>
    )
}

export default Movies