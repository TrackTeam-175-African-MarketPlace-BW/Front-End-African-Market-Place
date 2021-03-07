import React from "react";
import { Link } from "react-router-dom";
import '../LandingPage.css';
import backgroundImage from '../images/food_2.jpg';

const Info =  () => {
    return (
        <div>
            <div className="div-container img-div div-1">
                <img
                    src={backgroundImage}
                    alt="hand reaching for food"
                    className="div-bg-img"
                />
            </div>
            <div className="flex-container text-div div-container div-2">
                <h2>What We Do</h2>
                <p className="p-fix">Sauti Africa works to provide African farmers and food vendors a platform on which they can network with other small business owners to better position their place in local and surrounding markets. Our goal is to create an accessible way for hard-working people in disadvantaged countries to better their lives.</p>
                <p>With a free Sauti Africa account, farmers and vendors can:</p>
                <list>
                    <li>View current offerings at markets outside of their local area, along with prices, descriptions, and reviews</li>
                    <li>Meet and build relationships with other small business owners</li>
                    <li>Discover new markets at which they can vend products</li>
                    <li>Connect with better opportunities to advance their business</li>
                    <li>Improve their pricing and marketing strategies</li>
                </list>
                <p>Our low-cost strategizing services can help advance businesses even further by providing affordable access to marketing, pricing, and business management specialists.</p>
            </div>
        </div>
    );
};

export default Info;