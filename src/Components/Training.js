import React from 'react';
import TimerUp from './TimerUp';

const Training = () => {
    return (
        <div className="training">
            <span className="aside">Sport</span>
            <TimerUp headline="Org" alert={true} days={3} />
            <TimerUp headline="Sport" alert={true} days={3} />
        </div>
    );
}

export default Training;