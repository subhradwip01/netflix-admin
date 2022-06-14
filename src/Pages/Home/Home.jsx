import React from 'react'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import Chart from '../../components/Chart/Chart';
import "./Home.css"
import WidgetLg from '../../components/WidgetLg/WidgetLg';
import WidgetSm from '../../components/WidgetSm/WidgetSm';
const Home = () => {
  const data = [
    {
        name: 'Jan',
        "Active User": 4000,
    },
    {
        name: 'Feb',
        "Active User": 3000,
    },
    {
        name: 'March',
        "Active User": 2000,

    },
    {
        name: 'April',
        "Active User": 2780,
    },

];

  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart title="User Analytics" data={data} grid dataKey="Active User"/>
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}

export default Home