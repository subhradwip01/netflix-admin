import { useState, useEffect ,useContext} from "react";
import axios from "axios";
import "./WidgetSm.css";
import { Email, Person } from "@material-ui/icons";
import { AuthContext } from "../../context/authContext/AuthContext";
import { api } from "../../config";
import Loader from "../Loader/Loader"
export default function WidgetSm() {
  const [latestUser, setLatestUser] = useState([]);
  const [error, setError] = useState(false);
  const {user} = useContext(AuthContext);
  const [loading,setIsLoading] = useState(false);

  useEffect(() => {
    const getLatestUser = async () => {
      setIsLoading(true);
      try {
        const res = await api.get("/users?latest=true", {
          headers: {
            Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          },
        });
        
        let users = [];
        res.data.users.map((user) =>
          users.push({
            profilePic: user.profilePic,
            email: user.email,
            username: user.username,
          })
        );
        setError(false);
        setLatestUser(users);
        setIsLoading(false)
      } catch (error) {
        setError(true);
        setIsLoading(false)
      }
    };
    getLatestUser();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      {loading && <Loader/>}
      {!error ? (
        <ul className="widgetSmList">
          {latestUser.map(({ profilePic, username, email }) => (
            <UserItem
              profilePic={profilePic}
              username={username}
              email={email}
            />
          ))}
        </ul>
      ):
      <h3>Sorry! Unable to fetch latest user</h3>}
    </div>
  );
}

const UserItem = ({ profilePic, username, email }) => {
  return (
    <li className="widgetSmListItem">
      <img
        src={
          profilePic
            ? profilePic
            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
        }
        alt=""
        className="widgetSmImg"
      />
      <div className="widgetSmUser">
        <span className="widgetSmUsername">
          <Person className="widgetSmIcon" />
          {username}
        </span>
        <span className="widgetSmUserEmail">
          <Email className="widgetSmIcon" />
          {email}
        </span>
      </div>
    </li>
  );
};
