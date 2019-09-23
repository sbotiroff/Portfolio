import React from 'react';
import Scrollspy from 'react-scrollspy'
import { withRouter } from 'react-router-dom';

import './nav.css';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    handleRouteChange = component => {
        if (component) {
            this.props.history.push("/" + component.id)
        }
    }

    render() {
        return (
            <nav className="Nav" >
                <ul className={this.props.isFixed ? "fixedNav" : ""}>
                    <Scrollspy items={['about-me', 'experience', 'skills', 'projects', 'contact-me']} currentClassName="is-current" onUpdate={this.handleRouteChange} offset={-300}>
                        <li><a href="#about-me">About Me</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact-me">Contact me</a></li>
                    </Scrollspy>
                </ul>
            </nav >
        );
    }

}

export default withRouter(Nav);