import React from 'react';
import './AboutUsContent.css';
import Banner from './Banner'
import BannerIMG from '../images/Impressm_Banner_Faded.avif';
import TeamIMG from '../images/startup_group.jpg';

export default function AboutUsContent() {
    return (
        <div>
            <Banner
                secondaryTitle={"About Us"}
                imageSrc1={BannerIMG}
            />

            <div className="aboutus-content">
                <h3>
                    Three indie devs, setting out to create innovative games, hand in hand with their community!
                </h3>

                <img src={TeamIMG} alt="teamimg" className="TeamIMG" />

                <p>
                    Forming for what was originally a university project, Stepheight is one of a handful of developers trying to make games in Thuringia.
                </p>

                <p>
                    Driven by an eagerness to create games in a region where very few people have tried so far, we seek to show that anybody can make games anywhere, regardless of background or location.
                </p>

                <p>
                    Our dedication stems from our desire to build a community, locally but also online.
                    We hope to cultivate an active following that wants to interact with us and help make our games be the best it can be.
                </p>
            </div>
        </div>
    );
}
