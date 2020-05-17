import React, { useState, useEffect } from 'react';
import './timer.css'
import { useLocalState } from './localStorageHooks'


const Timer = (props) => {
    const day = 86400 // 86400
    const initialTime = props.days
    const initialTimeLeft = () => Number(window.localStorage.getItem(props.headline)) || (initialTime * day)
    const [timeLeft, setTimeLeft] = useState(initialTimeLeft);
    // const [timeLeft, setTimeLeft] = useState(604800);

    const calculateTimeLeft = () => {
        setTimeLeft(prev => prev - 1)
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
    if (timeLeft > day * 2) {
        remainingPathColor = COLOR_CODES.info
    } else if (timeLeft > day * 1) {
        remainingPathColor = COLOR_CODES.warning
    } else {
        remainingPathColor = COLOR_CODES.alert
    };
    useEffect(() => {
        window.localStorage.setItem(props.headline, timeLeft)
        let id = setTimeout(() => {
            calculateTimeLeft();
        }, 1000);
        return () => clearInterval(id)
    }, [timeLeft]);
    return (
        <div className="timer">
            <h2>{props.headline}</h2>
            <div className="base-timer" onClick={() => setTimeLeft(initialTime * day)}>
                <div className={`overlay ${(timeLeft === 0) ? "show" : ""}`}>
                    <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <g className="base-timer__circle">
                            <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
                            <path
                                id="base-timer-path-remaining"
                                strokeDasharray={`${Math.floor(timeLeft / ((day * props.days) / 283))} 283`}
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

export default Timer;

