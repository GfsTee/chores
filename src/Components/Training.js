import React from 'react';
import TimerUp from './TimerUp';

const Training = () => {
    return (
        <div className="training">
            <span className="aside">Training</span>
            <TimerUp headline="Sport" alert={true} day={2} />

        </div>
    );
}

export default Training;