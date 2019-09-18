import React from 'react';
import './footer.css';

import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
function footer() {
    return (
        <div className="Footer">
            <div className="Footer-icons">
                <a href="https://www.linkedin.com/in/sardor-botirov/" target="new_tab"><FaLinkedin size={'35px'} /></a>
                <a href="https://github.com/sbotiroff/" target="new_tab"><FaGithub size={'35px'} /></a>
                <a href="https://www.facebook.com/sardor.botirov.14" target="new_tab"><FaFacebook size={'35px'} /></a>
                <a href="https://www.instagram.com/sbotiroff/" target="new_tab"><FaInstagram size={'35px'} /></a>
            </div>

        </div>
    );
}

export default footer;