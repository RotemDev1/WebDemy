import React from "react";
import "./home.css"
import { Showcase } from "../../components/Home/Showcase";
import { Breadcrumbs } from "../../components/Home/Breadcrumbs";
import { Info } from "../../components/Home/Info";
import { About } from "../../components/Home/About";


export const Home = (props) => {

    return (
        <div className="home">
            <Showcase />
            <Breadcrumbs />
            <Info />
            <About />
        </div>
    );
};

{/* <div className="header-container">

            <text className="text">A broad selection of courses</text>
            <div>

            </div>
        </div> */}