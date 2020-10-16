import React from 'react';
import './CircleSelector.css';

const CircleSelector = props => {
    return (
        <div className="CircleSelector">
            {props.circles.map((circle, i) => 
                <button onClick={() => props.update(i)} className={props.current === i ? "selected" : ""} key={i}>select circle {circle}</button>
            )}
        </div>
    )
}

export default CircleSelector;