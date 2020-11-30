import React, { useState, useEffect } from 'react';
import './timer.css'



const TimerUp = (props) => {
    const day = 86400 // 86400
    const initialTime = 0
    const initialTimeLeft = () => Number(window.localStorage.getItem(props.headline)) || 0
    const [timeLeft, setTimeLeft] = useState(initialTimeLeft);
    // const [timeLeft, setTimeLeft] = useState(604800);
    const calculateTimeLeft = () => {
        setTimeLeft(prev => prev + 1)
    }
    const COLOR_CODES = {
        info: {
            color: "greenyellow"
        },
        warning: {
            color: "orange"
        },
        alert: {
            color: "red"
        }
    };

    let remainingPathColor = {}
    if (timeLeft < (day * props.days) || !props.alert) {
        remainingPathColor = COLOR_CODES.info
    } else {
        remainingPathColor = COLOR_CODES.alert
    };
    useEffect(() => {
        window.localStorage.setItem(props.headline, timeLeft)
        let id = setTimeout(() => {
            calculateTimeLeft();
        }, 1000);
        return () => clearInterval(id)
    }, [timeLeft, props.headline]);
    return (
        <div className="timer">
            <h2>{props.headline}</h2>
            <div className="base-timer" onClick={() => setTimeLeft(initialTime * day)}>
                {/* props.alert um timer mit alarmzeit zu versehen oder nicht */}
                <div className={`overlay ${(props.alert && timeLeft > (day * props.days)) ? "show" : ""}`}>
                    <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <g className="base-timer__circle">
                            <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
                            <path
                                id="base-timer-path-remaining"
                                strokeDasharray={`${Math.floor(timeLeft / (day * props.days / 283))} 283`}
                                className={`base-timer__path-remaining`}
                                style={remainingPathColor}
                                d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
                            ></path>
                        </g>
                    </svg>
                    <div className="base-timer__label">
                        <span className="big">
                            {Math.floor(timeLeft / day)}
                        </span>
                        <span className="hours">
                            {Math.floor((timeLeft % day) / 3600)}
                        </span>
                        <span className="small">
                            {timeLeft.toString().slice(-2)}
                        </span>
                    </div>

                </div>
            </div >
        </div>
    );
}

export default TimerUp;

