import React from 'react';
import './FinishCard.css';

function FinishCard(props) {
    const { movie_title, name, publish_info, location } = props.team;

    return (
        <div className="finish-card">
            <h3 class="finish-card-title">{movie_title}</h3>
            <h6 class="finish-card-location">{location}</h6>
            <h6 class="finish-card-username">{name}</h6>
            <p class="finish-card-info">{publish_info}</p>
        </div>
    )
}

export default FinishCard