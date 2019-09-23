import React from "react";

import "./Project.css";

const project = props => {
  const style = {
    backgroundImage: `url(${props.projectImage})`
  };

  return (
    <div className="Project">
      <a href={`${props.projectLink}`} target="new_tab">
        <div className="ProjectCircle" style={style}></div>
      </a>
      <p className="ProjectName">{props.projectName}</p>
      <p style={{ color: "#878787" }}>[ {props.usedTools} ]</p>
      <p>
        <a href={`${props.source}`} target="new_tab">
          Source
        </a>
      </p>
    </div>
  );
};

export default project;
