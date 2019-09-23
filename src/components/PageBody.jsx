import React from "react";
import Fade from "react-reveal/Fade"; // Importing Zoom effect

import "./pagebody.css";

import Nav from "./navigation/Nav";
import Skills from "./contents/Skills";
import Experience from "./contents/Experience";
import AboutMe from "./contents/AboutMe";
import ContactMe from "./contents/ContactMe";
import Projects from "./contents/Projects";

function pageBody(props) {
  return (
    <div className="PageBody">
      <header>
        <h1>Sardor Botirov</h1>
        <p>Software Engineer</p>
      </header>
      <div className="PageBodyContainer">
        <Nav isFixed={props.isFixed} />
        <Fade>
          <div className="PageBodyContents">
            <AboutMe />
            <Experience />
            <Skills />
            <Projects />
            <ContactMe />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default pageBody;
