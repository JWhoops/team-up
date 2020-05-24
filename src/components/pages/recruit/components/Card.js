import React from 'react';
import "./Card.css"

function Card(props) {
    const { movie_title, wanted_roles, description, location } = props.team;
    var roles = wanted_roles.map(r => r.number + "x" + r.role).join(", ")

    return (
        <div className="card">
            <h3 id="title">{movie_title}</h3>
            <h6 id="location">{location} <br />
                {roles}</h6>
            <p id="description">{description}</p>
        </div>
    )
}

export default Card;