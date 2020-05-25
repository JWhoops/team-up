
import React from 'react';

function PlusButton() {
    return (
        <div style={
            {
                backgroundColor: "black", color: "white",
                borderRadius: "100%", width: "50px", height: "50px",
                color: "white", fontSize: "30px", textAlign: "center",
                fontWeight: "bold", cursor: "pointer", position: "absolute",
                right: "50px", bottom: "50px"
            }}>+
        </div>
    )
}

export default PlusButton;