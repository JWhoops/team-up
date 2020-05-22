import React from 'react';
import "./Card.css"

function Card() {
    return (
        <div className="card">
            <h3 id="title">大头儿子 (12天)</h3>
            <h6 id="location">北京 你爸爸 <br />
            1x导演, 2x摄像</h6>
            <p id="description">我这个剧本超级棒</p>
        </div>
    )
}

export default Card;