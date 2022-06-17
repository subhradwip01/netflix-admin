import { useState, useEffect } from "react";
import axios from "axios";
import "./WidgetSm.css";
import { Email, Person } from "@material-ui/icons";

export default function WidgetSm() {
  const [latestUser, setLatestUser] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getLatestUser = async () => {
      try {
        const res = await axios.get("/users?latest=true", {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzJhMGYwOTY2YTNkMDdlNjlmZjk5MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTQ2OTg3OCwiZXhwIjoxNjU1NTU2Mjc4fQ.w5hP5O3tML8A9TCbDwetZYg2u-A8e2u-rfoZSLE8KQU",
          },
        });
        if (res.status !== 200) {
          setError(true);
          return;
        }
        console.log(res.data.users);
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
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
    getLatestUser();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
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
