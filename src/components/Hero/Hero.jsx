import React from 'react';
import "./Hero.css";
import CountUp from "react-countup";

import {HiLocationMarker} from 'react-icons/hi';
const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
            <div className="hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1>
                       Discover <br/>
                       Most Suitable <br/>
                       Property <br/>
                    </h1>
                </div>
                <div className="flexColStart hero-des">
                    <span>Find a variety of property that suits you very easily</span>
                    <span>Forgot all difficulties in finding a residence for you</span>

                </div>
                <div className="flexCenter search-bar">
                    <HiLocationMarker color = "var(--blue)" size = {25}/>
                    <input type="text" />
                    <button className="button">Search</button>
                </div>
                <div className="flexCenter stats">
                    <div className="flexColStart stat">
                        <span>
                            <CountUp start={8800} end = {9000} duration={2}/>
                            <span>+</span>

                        </span>
                        <span>Customers</span>
                    </div>

                    <div className="flexColStart stat">
                        <span>
                            <CountUp end={1100} duration={2}/>
                            <span>+</span>

                        </span>
                        <span>Happy Customers </span>
                    </div>


                    <div className="flexColStart stat">
                        <span>
                            <CountUp end={28} duration={2}/>
                            <span>+</span>

                        </span>
                        <span>Award Winning</span>
                    </div>

                </div>
            </div>
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./hero-img.jpg" alt="hero-image" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
