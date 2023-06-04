import { Avatar } from "@mui/material";
import "./Sidebar.css";

const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="img/21633.png" alt="failed" />
                <Avatar className="sidebar__avatar" />
                <h2>Haseeb Shah</h2>
                <h3>hh.haseebshah@gmail.com</h3>
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

            <div className="sidebar__button">
                <p>Recent</p>
            </div>
        </div>
     );
}
 
export default Sidebar;