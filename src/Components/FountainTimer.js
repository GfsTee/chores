import React from 'react';
import Timer from './Timer';

const FountainTimer = () => {
    return (
        <div className="timer">
            <h2>Brunnen</h2>
            <Timer days={7} />
        </div>
    );
}

export default FountainTimer;