import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import Fade from "react-reveal/Fade";

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";

import "./Slideshow.css";

function slideShow() {
  const slideshow = (image, title, animationClassName) => {
    const style = {
      backgroundImage: `url(${image})`
    };

    return (
      <div className={`SlideShow ${animationClassName}`} style={style}>
        <Fade big>
          <div className="SlideShow-title">
            <p>{title}</p>
          </div>
        </Fade>
      </div>
    );
  };

  return (
    <Switch>
      <Route
        path="/experience"
        key={"slide2"}
        render={() => slideshow(slide2, "Experience", "rotateY")}
      />
      <Route
        path="/skills"
        key={"slide3"}
        render={() => slideshow(slide3, "Skills", "slideToLeft")}
      />
      <Route
        path="/projects"
        key={"slide4"}
        render={() => slideshow(slide4, "Projects", "rotateY")}
      />
      <Route
        path="/contact-me"
        key={"slide5"}
        render={() => slideshow(slide5, "Contact Me", "slideToLeft")}
      />
      <Route
        key={"slide1"}
        render={() => slideshow(slide1, "About Me", "slideToLeft")}
      />
    </Switch>
  );
}

export default withRouter(slideShow);
