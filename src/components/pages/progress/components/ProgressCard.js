import React from 'react';
import "./ProgressCard.css"

function ProgressCard(props) {
    const { movie_title, wanted_roles, description, location } = props.team;

    return (
        <div className="progress-card">
            <h3 class="progress-card-title">{movie_title}</h3>
            <h6 class="progress-card-location">{location}</h6>
            <h6 class="progress-card-username">组名</h6>
            <p class="progress-card-description">{description}</p>
        </div>
    )
}

export default ProgressCard