import React, { Component } from "react";
import Project from "./project/Project";

import portfolio from "../../assets/logo512x512.png";
import mpg from "../../assets/projects/mpg.jpg";
import csClub from "../../assets/projects/csClub.png";
import spaceV1 from "../../assets/projects/spaceV1.png";
import spaceV2 from "../../assets/projects/spaceV2.png";
import javaArt from "../../assets/projects/javaArt.png";
import javaAnimation from "../../assets/projects/javaAnimation.png";
import cultureOfUzbekistan from "../../assets/projects/cultureOfUzbekistan.png";

import "./Projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          name: "Portfolio",
          image: portfolio,
          usedTools: "React.JS",
          source: "https://github.com/sbotiroff/Portfolio",
          projectLink: "/"
        },
        {
          name: "MPG Plugin",
          image: mpg,
          usedTools: "PHP, JavaScript, CSS, WordPress",
          source:
            "https://github.com/sbotiroff/Multiple-Page-Generator-Wordpress-Plugin",
          projectLink: "https://wordpress.org/plugins/multiple-page-generator/"
        },
        {
          name: "Computer Science Club",
          image: csClub,
          usedTools: "PHP, Jquery, JavaScript, SQL, MVC",
          source: "https://github.com/sbotiroff/CsClub",
          projectLink: "http://chelan.highline.edu/~sbotiroff/csclub/"
        },
        {
          name: "Culture of Uzbekistan",
          image: cultureOfUzbekistan,
          usedTools: "WordPress",
          source: "https://sardorb.sgedu.site/",
          projectLink: "https://sardorb.sgedu.site/"
        },
        {
          name: "All About Space V1",
          image: spaceV1,
          usedTools: "HTML, CSS, JavaScript",
          source: "https://github.com/sbotiroff/All-About-Space",
          projectLink: "http://chelan.highline.edu/~sbotiroff/project/"
        },
        {
          name: "All About Space V2",
          image: spaceV2,
          usedTools: "PHP, HTML, CSS, JavaScript",
          source: "https://github.com/sbotiroff/All-About-Space-v2",
          projectLink:
            "http://chelan.highline.edu/~sbotiroff/csi202/finalproject/"
        },
        {
          name: "Java Warrior Art",
          image: javaArt,
          usedTools: "Java, GPen",
          source: "https://github.com/sbotiroff/ArtContest",
          projectLink: "http://chelan.highline.edu/~sbotiroff/Capture.PNG"
        },
        {
          name: "Java Mario Animation",
          image: javaAnimation,
          usedTools: "Java, GRect GOval, GLine,GImage, GArc",
          source: "/",
          projectLink: "/"
        }
      ]
    };
  }

  render() {
    const projects = this.state.projects.map(project => (
      <Project
        projectName={project.name}
        projectImage={project.image}
        usedTools={project.usedTools}
        source={project.source}
        projectLink={project.projectLink}
      />
    ));
    return (
      <div id="projects" className="Projects">
        <h2>Projects</h2>
        <div className="ProjectsContainer">{projects}</div>
        <a href="https://github.com/sbotiroff/" target="new_tab">
          Check out my github account
        </a>
      </div>
    );
  }
}

export default Projects;
