import React from 'react';
import '../LandingPage.css';
import backgroundImage1 from '../images/food_1.jpg';
import backgroundImage2 from '../images/food_2.jpg';
import storyImage1 from '../images/story_1.jpg';
import storyImage2 from '../images/story_2.jpg';
import storyImage3 from '../images/story_3.jpg';
import { Link } from "react-router-dom";

export default function LandingPage() {
    return(
        <div>
            <div className="div-container img-div div-1">
                <img
                    src={backgroundImage1}
                    alt="hand reaching for food"
                    className="div-bg-img"
                />
                <div className="flex-container div-1-flex">
                    <div className="text-box div-1-text-box">
                        <h2 className="div-1-text">Sauti African Market Place empowers small business owners, particularly women, to improve their business and economic opportunities to grow out of poverty.</h2>
                        <div className="flex-container btn-div-flex">
                            <Link
                                to="/"
                                role="button"
                                className="btn-div"
                            >
                                <div className="btn">
                                    Find out more
                                </div>
                            </Link>
                            <Link
                                to="/register"
                                role="button"
                                className="btn-div"
                            >
                                <div className="btn">
                                    Create an account
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
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
            <div className="div-container img-div div-3">
                <img
                    src={backgroundImage2}
                    alt="women in food market"
                    className="div-bg-img"
                />
            </div>
            <div className="flex-container text-div div-container div-4">
                <h2>We've helped small business owners across Africa get closer to their full potential.</h2>
                <div className="div-4-flex">
                    <div className="profile">
                        <img src={storyImage1} />
                        <h4>Adah, Nigeria</h4>
                        <p>After receiving an annual grant from Sauti Africa, Adah was able to hire a small crew to help run her fishing business. Having extra hands allowed her to more than double the amount of food she provided to her region, in addition to creating jobs in the community.</p>
                    </div>
                    <div className="profile">
                        <img src={storyImage2} />
                        <h4>Kwame, Ghana</h4>
                        <p>Through Sauti Africa's network, Kwame was able to discover new markets at which he could sell his crops. With the additional income, he was able to expand his farm and began growing pineapple, tomatoes, and bananas.</p>
                    </div>
                    <div className="profile">
                        <img src={storyImage3} />
                        <h4>Nabulungi, Uganda</h4>
                        <p>When her farm business became stagnant, Nabulungi created new local connections via Sauti Africa and was able to find a source for passionflower seeds. As the only passionflower farmer in her area, she has turned her business around.</p>
                    </div>
                </div>
            </div>
            <div className="flex-container text-div div-container div-5">
                <h2 className="div-5-text">With our platform, we hope to encourage economic growth in less fortunate areas of Africa in order to help better lives through increased opportunity.</h2>
                <div className="div-5-list-container">
                    <list>
                        <p>Some of our contributions back into the community:</p>
                        <li>Annual grants for up-and-coming businesses into our strategizing program</li>
                        <li>Donations into educational programs for girls' schools in Africa</li>
                        <li>Financial assistance and short-term, interest free loans on a rolling, bi-monthly basis</li>
                    </list>
                </div>
            </div>
        </div>
    )
}