import React from 'react';
import './raw.css';

function raw(props) {
    return (
        <div className="Raw" id={props.header}>
            <h2>
                {props.header}
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Eeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                adipisci velit, sed quia non numquam eius modi tempora incidunt contact me.
            </p>
        </div>
    );
}

export default raw;