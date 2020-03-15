import React from "react";
import SideImage from '../../asset/img/index-cover.png'
const Section = () => {
    return (
        <div>
            <section class="left-section">
                <img src={SideImage} alt="" />
                <div class="header-cover">
                    <p>Book is a window to the world</p>
                </div>
                <div class="footer-cover">
                    <p>Photo by Mark Pan4ratte on Unsplash</p>
                </div>
                <div class="overlay-bg"></div>
            </section>
        </div>
    );
};

export default Section;
