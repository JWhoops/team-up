
import React from 'react';
import {Link} from 'react-router-dom';

function PlusButton() {
    return (
        <Link to="/new_team" style={
            {
                backgroundColor: "black", color: "white",
                borderRadius: "100%", width: "50px", height: "50px",
                color: "white", fontSize: "30px", textAlign: "center",
                fontWeight: "bold", cursor: "pointer", position: "absolute",
                right: "50px", bottom: "50px"
            }}>+
        </Link>
    )
}

export default PlusButton;