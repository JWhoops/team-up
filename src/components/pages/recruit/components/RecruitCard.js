import React from 'react';
import "./RecruitCard.css"

function Card(props) {
    const { movie_title, wanted_roles, description, location } = props.team;
    var roles = wanted_roles.map(r => r.number + "x" + r.role).join(", ")

    return (
        <div className="recruit-card">
            <h3 class="recruit-card-title">{movie_title}</h3>
            <h6 class="recruit-card-location">{location} <br />
                {roles}</h6>
            <p id="recruit-card-description">{description}</p>
        </div>
    )
}

export default Card;