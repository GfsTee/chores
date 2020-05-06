import React from 'react';
import TimerUp from './TimerUp';

const Training = () => {
    return (
        <div className="training">
            <span className="aside">Training</span>
            <TimerUp headline="Sport" alert={true} days={3} />

        </div>
    );
}

export default Training;