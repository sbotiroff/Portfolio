import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Scrollspy from 'react-scrollspy'

import './nav.css';

function nav(props){

    return (
        <nav className = "Nav" >
            <ul className = {props.isFixed?"fixedNav":""}>
            <Scrollspy items={ ['aboutme', 'experience', 'skills', 'projects', 'contactme' ] } currentClassName="is-current">
    
                <li> <a href="#aboutme">About Me</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contactme">Contact me</a></li>
            </Scrollspy>
            </ul>
        </nav>
    );
}

export default nav;