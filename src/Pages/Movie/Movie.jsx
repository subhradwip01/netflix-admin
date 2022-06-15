import React from 'react'
import "./Movie.css";
import { Publish } from "@material-ui/icons"
import { Link } from "react-router-dom"
const Movie = () => {
  return (
    <div className="movie">
      <div className="movieTitleContainer">
        <h1 className="movieTitle">movie</h1>
        <Link to="/new-movie">
          <button className="movieAddButton">Create</button>
        </Link>
      </div>
      <div className="movieTop">
        <div className="movieTopRight">
          <div className="movieInfoTop">
            <img src="https://www.cheatsheet.com/wp-content/uploads/2019/12/money-heist-banner.png" alt="" className="movieInfoImg" />
            <span className="movieName">Money Heist</span>
          </div>
          <div className="movieInfoBottom">
            <div className="movieInfoItem">
              <span className="movieInfoKey">id:</span>
              <span className="movieInfoValue">10</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">genre:</span>
              <span className="movieInfoValue">Thriller</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">year:</span>
              <span className="movieInfoValue">2020</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">limit:</span>
              <span className="movieInfoValue">18</span>
            </div>
          </div>
        </div>
      </div>
      <div className="movieBottom">
        <form className="movieForm">
          <div className="movieFormLeft">
            <label>movie Title</label>
            <input type="text" placeholder="Money Heist" />
            <label>Year</label>
            <input type="text" placeholder="2020" />
            <label>Genre</label>
            <input type="text" placeholder="Thriller" />
            <label>Limit</label>
            <input type="text" placeholder="Limit" />
            <label>Trailer</label>
            <input type="file" placeholder="Traler" />
            <label>Video</label>
            <input type="file" placeholder="Video" />
          </div>
          <div className="movieFormRight">
            <div className="productUpload">
              <img
                src="https://www.cheatsheet.com/wp-content/uploads/2019/12/money-heist-banner.png"
                alt=""
                className="movieUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="movieButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Movie