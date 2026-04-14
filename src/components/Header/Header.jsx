import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import { NavLink } from "react-router-dom";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";


function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__logo" alt="App logo" src={logo} />
      </NavLink>
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
        <ToggleSwitch />
        <button
          type="button"
          className="header__add-clothes-button"
          onClick={handleAddClick}
        >
         + Add Clothes
      </button>
      <NavLink className="header__nav-link" to="profile">
      <div className="header__user-container">
        <p className="header__username">Michael Jackson</p>
        <img src={avatar} alt="User avatar" className="header__avatar" />
        </div>
      </NavLink>
    </header>
  );
}

export default Header;
