import React from "react";
import "./home.css"
import home from '../../assets/home.jpeg';
import { useDispatch, useSelector } from "react-redux";


export const Home = (props) => {

    return (
        <div className="header-container">
            <div className='main-image'>
                <img src={home} alt='homeimg' />
            </div>
            <text className="text">A broad selection of courses</text>
            <div>
                <text className="text1">
                    Choose from 183,000 online video courses with new additions published every month
                </text>
            </div>
        </div>
    );
};

export default Home;