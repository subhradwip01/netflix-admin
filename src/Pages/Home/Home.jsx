import React, { useState, useEffect, useMemo, useContext } from "react";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import Chart from "../../components/Chart/Chart";
import "./Home.css";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
import { api } from "../../config";
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
  const {user} = useContext(AuthContext)
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get("/users/stats", {
          headers: {
            Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          },
        });
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
