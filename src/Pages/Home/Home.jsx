import React, { useState, useEffect, useMemo } from "react";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import Chart from "../../components/Chart/Chart";
import "./Home.css";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import axios from "axios";
const Home = () => {
  const months = useMemo(
    () => [
      "Januray",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],

    []
  );

  const [userStatData, setUserStatData] = useState([]);
  const [userStatError, setUserStateError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzJhMGYwOTY2YTNkMDdlNjlmZjk5MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTQ2OTg3OCwiZXhwIjoxNjU1NTU2Mjc4fQ.w5hP5O3tML8A9TCbDwetZYg2u-A8e2u-rfoZSLE8KQU",
          },
        });
        if (res.status === 403) {
          window.alert("You are not adim to see data");
          setUserStateError(true);
          return;
        }
        if (res.status !== 200) {
          setUserStateError(true);
          return;
        }
        setUserStateError(false);
        let userStat = [];
        res.data.map((item) =>
          userStat.push({
            name: months[item._id - 1],
            "Active User": item.total,
          })
        );
        setUserStatData(userStat);
      } catch (error) {
        setUserStateError(true);
        console.log(error);
      }
    };
    getData();
  }, []);

  console.log(userStatData);
  return (
    <div className="home">
      <FeaturedInfo />
      {!userStatError ? (
        <Chart
          title="User Analytics"
          data={userStatData}
          grid
          dataKey="Active User"
        />
      ) : (
        <h3 style={{ padding: "20px" }}>Sorry! Unable to fetch User stat</h3>
      )}
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
