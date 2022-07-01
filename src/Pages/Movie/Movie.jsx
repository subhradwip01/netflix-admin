import React, { useState,useContext } from "react";
import "./Movie.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../firebase";
import { AuthContext } from "../../context/authContext/AuthContext";
import { MovieContext } from "../../context/movieContext/MovieContetxt";
import { upadateMovie } from "../../context/movieContext/apiCalls";


const Movie = () => {
  const { state } = useLocation();
  const [movie, setMovie] = useState(state.movie || "");
  const [formData, setFormData] = useState({ ...state.movie });
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [needToUpload,setNeedToUpload]=useState(false);
  const {user}=useContext(AuthContext);
  const {dispatch}=useContext(MovieContext);
  const navigate=useNavigate()
  const handleChange = (e) => {
    const value = e.target.value;
    console.log(e.target)
    setFormData({ ...formData, [e.target.name]: value });
  };

  const upload = (items) => {
    console.log(items);
    items.forEach((item) => {
      if(item.file){
      const filename=new Date().getTime() + item.file.name
      const bucketRef = ref(storage, `items/${filename}`);
      const uploadTask = uploadBytesResumable(bucketRef, item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (err) => {
          console.log(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setFormData((prev) => ({ ...prev, [item.label]: url }));
            setNeedToUpload(false)

          });
        }
      );
      }
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();

    upload([
      { file: img, label: "imgBanner" },
      { file: imgTitle, label: "imgTitle" },
      { file: imgSm, label: "imgThumbnail" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    await upadateMovie(dispatch,formData,user.token)
    navigate(-1)
  };

  return (
    <div className="movie">
      <div className="movieTitleContainer">
        <h1 className="movieTitle">Movie</h1>
        <Link to="/new-movie">
          <button className="movieAddButton">Create</button>
        </Link>
      </div>
      <div className="movieTop">
        <div className="movieTopRight">
          <div className="movieInfoTop">
            <img src={movie.img} alt="" className="movieInfoImg" />
            <span className="movieName">{movie.title}</span>
          </div>
          <div className="movieInfoBottom">
            <div className="movieInfoItem">
              <span className="movieInfoKey">id:</span>
              <span className="movieInfoValue">{movie.id}</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">genre:</span>
              <span className="movieInfoValue">{movie.genre}</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">year:</span>
              <span className="movieInfoValue">{movie.year}</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">limit:</span>
              <span className="movieInfoValue">{movie.limit}</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">Series:</span>
              <span className="movieInfoValue">
                {movie.isSeries.toString()}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="movieBottom">
        <form className="movieForm">
          <div className="movieFormLeft">
            <label>movie Title</label>
            <input
              type="text"
              placeholder="eg. Money Heist"
              value={formData.title}
              name="title"
              onChange={handleChange}
            />
            <label>Year</label>
            <input
              type="text"
              placeholder="2020"
              value={formData.year}
              name="year"
              onChange={handleChange}
            />
            <label>Genre</label>
            <input
              type="text"
              placeholder="Thriller"
              value={formData.genre}
              name="genre"
              onChange={handleChange}
            />
            <label>Limit</label>
            <input
              type="text"
              placeholder="Limit"
              value={formData.limit}
              name="limit"
              onChange={handleChange}
            />
            <label>Trailer</label>
            <input
              type="file"
              placeholder="Traler"
              onChange={(e) => {setTrailer(e.target.files[0]);setNeedToUpload(true)}}
            />
            <label>Video</label>
            <input
              type="file"
              placeholder="Video"
              onChange={(e) =>{ setVideo(e.target.files[0]);setNeedToUpload(true)}}
            />

            <label>Image</label>
            <input
              type="file"
              id="img"
              name="img"
              onChange={(e) => {setImg(e.target.files[0]);setNeedToUpload(true)}}
            />

            <label>Title image</label>
            <input
              type="file"
              id="imgTitle"
              name="imgTitle"
              onChange={(e) => {setImgTitle(e.target.files[0]);setNeedToUpload(true)}}
            />

            <label>Thumbnail image</label>
            <input
              type="file"
              id="imgSm"
              name="imgSm"
              onChange={(e) => {setImgSm(e.target.files[0]);setNeedToUpload(true)}}
            />
            {(img || imgSm || imgTitle || trailer || video) && needToUpload ? (
              <button className="movieButton" onClick={handleUpload}>
                Upload
              </button>
            ) : null}
            {!needToUpload && <button className="movieButton" onClick={handleSubmit}>Update</button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Movie;
