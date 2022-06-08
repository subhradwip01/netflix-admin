import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <FeatureCard title="Total Users" data="1231" />
            <FeatureCard title="Total Movies" data="452" />
        </div>
    );
}

const FeatureCard = ({ title, data }) => {
    return (<div className="featuredItem">
        <span className="featuredTitle">{title}</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">{data}</span>
            <span className="featuredMoneyRate">
                -11.4 <ArrowDownward className="featuredIcon negative" />
            </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
    </div>)
}