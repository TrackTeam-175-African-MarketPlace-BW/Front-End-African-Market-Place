import React from 'react';
import '../LandingPage.css';
import backgroundImage1 from '../images/food_1.jpg';
import backgroundImage2 from '../images/food_2.jpg';
import { Link } from "react-router-dom";

export default function LandingPage() {
    return(
        <div>
            <div className="div-container div-1">
                <img src={backgroundImage1} alt="hand reaching for food" className="div-bg-img" />
                <div className="flex-container div-1-flex">
                    <div className="text-container">
                        <h2 id="landingPage-h2">Sauti Africa empowers small business owners, particularly women, to improve their business and economic opportunities to grow out of poverty.</h2>
                        <Link
                            to="/"
                            className="btn"
                            role="button"
                        >
                            Find out more
                        </Link>
                        <Link
                            to="/register"
                            className="btn"
                            role="button"
                        >
                            Create an account
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex-container div-container div-2">
                <h3>Content about what we do</h3>
            </div>
            <div className="div-container div-3">
                <img
                    src={backgroundImage2}
                    alt="women in food market"
                    className="div-bg-img"
                />
            </div>
            <div className="flex-container div-container div-4">
                <h3>Content about success stories</h3>
            </div>
        </div>
    )
}