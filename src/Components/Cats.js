import React from 'react';
import Timer from './Timer';

const Cats = () => {
    return (
        <div className="cat-chores">
            <span className="aside">Katzen</span>
            <Timer headline="Katzenklo" days={2} />
            <Timer headline="Brunnen" days={5} />
        </div>
    );
}

export default Cats;