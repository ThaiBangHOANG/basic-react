import React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink to="/" exact={true} activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/news" activeClassName="active">
          News
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/user" activeClassName="active">
          Users
        </NavLink>
      </div>
    );
  }
}

export default Navigation;
