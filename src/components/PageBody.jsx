import React from 'react';
import Nav from './navigation/Nav';
import './pagebody.css'
import Raw from './contents/Raw';
import Skills from './contents/Skills';
import Experience from './contents/Experience';
import AboutMe from './contents/AboutMe';
import ContactMe from './contents/ContactMe';
import Projects from './contents/Projects'
function pageBody(props) {
    return (
            <div className="PageBody">
                <header>
                    <h1>Sardor Botirov</h1>
                    <p>Software Engineer</p>
                </header>
                <div className="PageBodyContainer">
                    <Nav isFixed={props.isFixed} />
                    <div className = "PageBodyContents">
                        <AboutMe header="aboutme" />
                        <Experience header="experience" />
                        <Skills header = "Skills"/>
                        <Projects header="projects" />        
                        <ContactMe header="contactme" />  
                    </div>

                </div>
            </div>
    );
}

export default pageBody;