import React from 'react';

const projects = () => {
    const style = {
        a: {
            color: "white",
            textDecoration: "underline"
        },
        p: {
            textAlign: "center",
            textStyle: "italic"
        }

    }
    return (
        <div id='projects'>
            <h2>Projects</h2>
            <p style={style.p}>
                Coming soon
            </p>
            <a href="https://github.com/sbotiroff/" style={style.a}>Lets check my github account till projects appear</a>
        </div>
    );
}

export default projects;