import "./WidgetSm.css";
import { Email,Person } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"><Person className="widgetSmIcon"/>Anna Keller</span>
            <span className="widgetSmUserEmail"><Email className="widgetSmIcon"/>Software Engineer</span>
          </div>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"><Person className="widgetSmIcon"/>Anna Keller</span>
            <span className="widgetSmUserEmail"><Email className="widgetSmIcon"/>Software Engineer</span>
          </div>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"><Person className="widgetSmIcon"/>Anna Keller</span>
            <span className="widgetSmUserEmail"><Email className="widgetSmIcon"/>Software Engineer</span>
          </div>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"><Person className="widgetSmIcon"/>Anna Keller</span>
            <span className="widgetSmUserEmail"><Email className="widgetSmIcon"/>Software Engineer</span>
          </div>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"><Person className="widgetSmIcon"/>Anna Keller</span>
            <span className="widgetSmUserEmail"><Email className="widgetSmIcon"/>Software Engineer</span>
          </div>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"><Person className="widgetSmIcon"/>Anna Keller</span>
            <span className="widgetSmUserEmail"><Email className="widgetSmIcon"/>Software Engineer</span>
          </div>
        </li>
       
      </ul>
    </div>
  );
}