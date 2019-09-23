import React from 'react';
import { FaDownload } from 'react-icons/fa'

import Resume from '../../assets/Sardor-Botirov-resume.pdf'

import './sidebar.css';


function sideBar() {
    return (
        <div className="SideBar">
            <a href="/"></a>
            <div className="SideBar-icons">
                <a href={Resume}>Resume | | <FaDownload size={'35px'}></FaDownload></a>
            </div>
        </div>
    );
}

export default sideBar;