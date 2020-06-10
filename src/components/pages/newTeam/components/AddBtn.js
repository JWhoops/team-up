import React from 'react';
import { Button } from 'react-bootstrap';

function AddBtn() {
    return (
        <Button style={
            {
                backgroundColor: "black",
                color: "white",
                borderRadius: "100%",
                width: "27px", height: "27px",
                color: "white",
                fontSize: "30px",
                textAlign: "center",
                cursor: "pointer",
                padding: 0,
                border: "0 solid transparent",
            }}>
            <p style={{
                margin: 0,
                padding: 0,
                position: "relative",
                bottom: "12px",
            }}>+</p>
        </Button>
    )
}

export default AddBtn;