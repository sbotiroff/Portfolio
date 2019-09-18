import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';

import './Slideshow.css';

function slideShow() {
    const slideshow = (image, title) => {
        const style = {
            backgroundImage: `url(${image})`,
        }

        return (
            <div className="SlideShow" style={style}>
                <div className="SlideShow-title">
                    <p>{title}</p>
                </div>
            </div>

        )

    };

    return (
        <Switch>
            <Route path="/experience" render={() => slideshow(slide2, "Experience")} />
            <Route path="/skills" render={() => slideshow(slide3, "Skills")} />
            <Route path="/projects" render={() => slideshow(slide2, "Projects")} />
            <Route path="/contact-me" render={() => slideshow(slide1, "Contact Me")} />
            <Route render={() => slideshow(slide1, "About Me")} />
        </Switch>
    );
}

export default withRouter(slideShow);