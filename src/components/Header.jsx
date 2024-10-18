import logo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
      <div className="header">
       <img src={logo} alt="logo" />
       <nav>
        <ul>
          <NavLink to="/home" className={({isActive}) => (isActive ? "underline" : "")}>
            <li>Accueil</li>
            </NavLink>
            <NavLink to="/about" className={({isActive}) => (isActive ? "underline" : "")}>
            <li>A propos</li>
            </NavLink>
        </ul>
       </nav>
      </div>
    );
  };
  
  export default Header;