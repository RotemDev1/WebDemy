import React from "react";
import { NavLink } from 'react-router-dom';
import { Logo } from "../logo/Logo";
import "./Navigation.css"
import CartIcon from "../Cart/CartIcon";



export const Navigation = (props) => {
    return (
        <header className="header" >
            <div className="left-header" >
                <Logo />
            </div>
            <input type="text" placeholder="Search.." className="search-header" >
            </input>
            <div className="right-header" >
                <NavLink
                    className='btn-header'
                    to="/courses">
                    Our Courses
                </NavLink>
                <button className="btn-header">
                    <span className="icon"><CartIcon /></span>
                    <span>My Cart</span>
                </button>
            </div>
        </header>
    );
};

