import { Avatar } from "@mui/material";
import "./Sidebar.css";

const Sidebar = () => {
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return ( 
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={require('./img/21633.jpg')} alt="failed" />
                <Avatar className="sidebar__avatar" />
                <h2>Haseeb Shah</h2>
                <h4>hh.haseebshah@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Who viewed your posts</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </div>
        </div>
     );
}
 
export default Sidebar;