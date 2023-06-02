import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return ( 
        <div className="header">
            <div className="header__left">
            <img src="https://img.icons8.com/fluency/480/linkedin.png" alt="linkedin"/>

                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" />
                </div>
            </div>

            <div className="header__right">

            </div>
        </div>
     );
}
 
export default Header;