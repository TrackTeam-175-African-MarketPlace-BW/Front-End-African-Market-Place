import React from 'react';
import '../LandingPage.css';
import backgroundImage1 from '../images/food_1.jpg';
import backgroundImage2 from '../images/food_2.jpg';
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
                    <div className="div-1-text-box">
                        <h2>Sauti African Market Place empowers small business owners, particularly women, to improve their business and economic opportunities to grow out of poverty.</h2>
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
                <h2>Content about what we do</h2>
                <p>Good man. Nixon's pro-war and pro-family. Say it in Russian! I'm Santa Claus! Why did you bring us here?
                WINDMILLS DO NOT WORK THAT WAY! GOOD NIGHT! This is the worst kind of discrimination: the kind against me! I usually try to keep my sadness pent up inside where it can fester quietly as a mental illness.
                That's right, baby. I ain't your loverboy Flexo, the guy you love so much. You even love anyone pretending to be him! With a warning label this big, you know they gotta be fun! I'll tell them you went down prying the wedding ring off his cold, dead finger.
                Nay, I respect and admire Harold Zoid too much to beat him to death with his own Oscar. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Okay, it's 500 dollars, you have no choice of carrier, the battery can't hold the charge and the reception isn't very…
                Oh no! The professor will hit me! But if Zoidberg 'fixes' it… then perhaps gifts! Yes. You gave me a dollar and some candy. I just want to talk. It has nothing to do with mating. Fry, that doesn't make sense.
                Noooooo! Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? Who am I making this out to? Negative, bossy meat creature! Do a flip!
                Ooh, name it after me! No, she'll probably make me do it. Guess again. Okay, I like a challenge. You don't know how to do any of those.</p>
            </div>
            <div className="div-container img-div div-3">
                <img
                    src={backgroundImage2}
                    alt="women in food market"
                    className="div-bg-img"
                />
            </div>
            <div className="flex-container text-div div-container div-4">
                <h2>Content about success stories</h2>
                <div className="flex-text">
                    <p>Good man. Nixon's pro-war and pro-family. Say it in Russian! I'm Santa Claus! Why did you bring us here?
                    WINDMILLS DO NOT WORK THAT WAY! GOOD NIGHT! This is the worst kind of discrimination: the kind against me! I usually try to keep my sadness pent up inside where it can fester quietly as a mental illness.
                    That's right, baby. I ain't your loverboy Flexo, the guy you love so much. You even love anyone pretending to be him! With a warning label this big, you know they gotta be fun!I'll tell them you went down prying the wedding ring off his cold, dead finger.
                    Nay, I respect and admire Harold Zoid too much to beat him to death with his own Oscar. </p>
                    <p> What are you hacking off? Is it my torso?! 'It is!' My precious torso! Okay, it's 500 dollars, you have no choice of carrier, the battery can't hold the charge and the reception isn't very…
                    Oh no! The professor will hit me! But if Zoidberg 'fixes' it… then perhaps gifts! Yes. You gave me a dollar and some candy. I just want to talk. It has nothing to do with mating. Fry, that doesn't make sense.
                    Noooooo! Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? Who am I making this out to? Negative, bossy meat creature! Do a flip!
                    Ooh, name it after me! No, she'll probably make me do it. Guess again. Okay, I like a challenge. You don't know how to do any of those.</p>
                </div>
            </div>
        </div>
    )
}