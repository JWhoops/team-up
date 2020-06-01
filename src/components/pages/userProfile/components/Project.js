import React from 'react';
import "./Project.css";
import {Link} from 'react-router-dom';

function Project(props) {
    return <Link to="/team/{props.teamId}" className="profile-page-project">
            {props.projectName}
    </Link>
}

export default Project;