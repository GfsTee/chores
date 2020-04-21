import React, { useState, useEffect } from 'react';
import './timer.css'



const Timer = () => {
    const day = 86400
    const initialTime = 7
    const [timeLeft, setTimeLeft] = useState(initialTime * day);
    // const [timeLeft, setTimeLeft] = useState(604800);

    const calculateTimeLeft = () => {
        if (timeLeft > 0) {
            setTimeLeft(prev => prev - 1)
        }
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
        let id = setTimeout(() => {
            calculateTimeLeft();
        }, 1000);
        return () => clearInterval(id)
    }, [timeLeft]);
    return (
        <div class="base-timer" onClick={() => setTimeLeft(initialTime * day)}>
            <div className={`overlay ${(timeLeft === 0) ? "show" : ""}`}>
                <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <g class="base-timer__circle">
                        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
                        <path
                            id="base-timer-path-remaining"
                            stroke-dasharray={`${Math.floor(timeLeft / 2137)} 283`}
                            class={`base-timer__path-remaining`}
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
                <span class="base-timer__label">
                    {Math.round(timeLeft / day)}
                </span>
            </div>
        </div >
    );
}

export default Timer;

