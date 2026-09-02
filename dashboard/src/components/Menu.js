import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ user, onLogout }) => {
  const menuClass = ({ isActive }) => (isActive ? "menu selected" : "menu");

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <NavLink style={{ textDecoration: "none" }} to="/" end>
             {({ isActive }) => <p className={menuClass({ isActive })}>Dashboard</p>}
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none" }} to="/orders">
             {({ isActive }) => <p className={menuClass({ isActive })}>Orders</p>}
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none" }} to="/holdings">
             {({ isActive }) => <p className={menuClass({ isActive })}>Holdings</p>}
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none" }} to="/positions">
             {({ isActive }) => <p className={menuClass({ isActive })}>Positions</p>}
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none" }} to="/funds">
             {({ isActive }) => <p className={menuClass({ isActive })}>Funds</p>}
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none" }} to="/apps">
             {({ isActive }) => <p className={menuClass({ isActive })}>Apps</p>}
            </NavLink>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">{user.fullName.slice(0, 2).toUpperCase()}</div>
          <p className="username">{user.fullName}</p>
          <button className="logout-button" type="button" onClick={onLogout}>Logout</button>
        </div>
        
      </div>
    </div>
  );
};

export default Menu;
