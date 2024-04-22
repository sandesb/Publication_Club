import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Faq = () => {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setSecond(prevSecond => {
                    if (prevSecond === 59) {
                        setMinute(prevMinute => {
                            if (prevMinute === 59) {
                                setHour(prevHour => prevHour + 1);
                                return 0;
                            } else {
                                return prevMinute + 1;
                            }
                        });
                        return 0;
                    } else {
                        return prevSecond + 1;
                    }
                });
            }, 1000);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    function start() {
        setIsRunning(true);
        toast.info('😎 Apna Time Aagaya!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            
    }

    function pause() {
        setIsRunning(false);
        toast.warning('🥶 No no no, wey weyy waittt', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

    function reset() {
        setIsRunning(false);
        setHour(0);
        setMinute(0);
        setSecond(0);
        toast.error('💀 Khatam! Tata! Goodbye! Gaya! ', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        
    }

    function returnData(input) {
        return input >= 10 ? input : `0${input}`;
    }

    return (
        <div class="flex-wrap timer">
            {/* <img className="club" src="/club1.png" alt="club"></img> */}

            <h1>Timer:</h1>
            <div>
                <span id="hour">{returnData(hour)}</span>:<span id="minute">{returnData(minute)}</span>:
                <span id="second">{returnData(second)}</span>
                </div>

            <div class="flex-wrap">
            <button type="button"  class="timer-button" onClick={start} disabled={isRunning} name="start">▶️</button>
            <button type="button"  class="timer-button" onClick={pause} disabled={!isRunning} name="pause">⏸</button>
            <button type="button"  class="timer-button" onClick={reset} name="reset">⏹</button>
            </div>

        </div>
    );
};

export default Faq;
