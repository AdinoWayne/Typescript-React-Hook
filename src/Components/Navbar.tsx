import React from 'react';
import {NavLink} from "react-router-dom";
import history from "../utility/history";
import logo from "../Style/src/logo.png"

export const Navbar = (props: any):JSX.Element => {
    return (
        <div className="myNavbar m-b-20">
            <div className="main-header-image">
                <img
                    src={logo}
                    alt=""
                    onClick={()=>history.push("/")}
                />
            </div>
            <NavLink className="nav-link" to="/Favorites">Favorites</NavLink>
        </div>
    );
};

export default Navbar;