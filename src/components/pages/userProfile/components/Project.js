import React from 'react';
import "./Project.css";

function Project(props) {
    return <div className="profile-page-project">
            {props.projectName}
    </div>
}

export default Project;