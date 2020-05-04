import React from 'react';
import Timer from './Timer';

const WcTimer = () => {
    return (
        <div className="timer">
            <h2>Katzenklo</h2>
            <Timer days={7} />
        </div>
    );
}

export default WcTimer;