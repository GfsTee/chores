import React from 'react';
import Timer from './Timer';
// import TimerUp from './TimerUp';

const Home = () => {
    return (
        <div className="home-chores">
            <span className="aside">Zuhause</span>
            <Timer headline="Aufräumen / Saugen" days={7} />
            {/* <Timer headline="Wischen" alert={false} /> */}
            <Timer headline="Bad Mülleimer" days={14} />
        </div>
    );
}

export default Home;