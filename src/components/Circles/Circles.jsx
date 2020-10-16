import React from 'react';
import './Circles.css';

const Circles = props => {
    return (
        <div className="Circles">
            {props.circles.map((circle, i) => 
                <div className={props.current === i ? "selected" : ""} key={i}>{circle}</div>
            )}
        </div>
    )
}

export default Circles;