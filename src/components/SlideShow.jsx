import React from 'react';
import './slideshow.css';

function slideShow(){
    const link = require('../assets/slide1.jpg');
    return(
        <div className = "SlideShow">
            <img src={link} alt=""/>
        </div>
    );
}

export default slideShow;