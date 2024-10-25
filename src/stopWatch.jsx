import {useState, useEffect, useRef} from "react";
import "./StopWatch.css";

function StopWatch(){
    // State to keep track of elapsed time
    const [elapsedTime, setElapsedTime] = useState(0);
    // State to track if the stopwatch is running
    const [isRunning, setIsRunning] = useState(false);
    // Ref to store the interval ID for clearing later
    const intervalIdRef = useRef(null);
    // Ref to store the start time
    const startTimeRef = useRef(0);

    // Effect hook to handle the timer logic
    useEffect(() => {
        if(isRunning){
            // Start the interval when isRunning is true
            intervalIdRef.current = setInterval(() => {
                // Update elapsed time by calculating difference from start time
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10); // Update every 10ms for smoother display
        }
        // Dependency array ensures this effect runs when isRunning changes
    }, [isRunning]);

    // Function to start the stopwatch
    const start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now(); // Set the start time
    }

    // Function to stop the stopwatch
    const stop = () => {
        setIsRunning(false);
        clearInterval(intervalIdRef.current); // Clear the interval
    }

    // Function to reset the stopwatch
    const reset = () => {
        stop(); // Stop the timer
        setElapsedTime(0); // Reset elapsed time to 0
        setIsRunning(false); // Ensure isRunning is set to false
    }

    // Function to format the elapsed time into HH:MM:SS.MS format
    const formatTime = (elapsedTime) => {
        const ms = String(elapsedTime % 100).padStart(2, '0');
        const seconds = String(Math.floor((elapsedTime / 1000) % 60)).padStart(2, '0');
        const minutes = String(Math.floor((elapsedTime / 60000) % 60)).padStart(2, '0');
        const hours = String(Math.floor(elapsedTime / 3600000)).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}.${ms}`;
    }

    // Render the stopwatch UI
    return (
        <div className="stopwatch-container">
            <div className="stopwatch-display">
                <div className="time-display">{formatTime(elapsedTime)}</div>
            </div>
            <div className="controls">
                {/* Toggle between Start and Stop based on isRunning state */}
                <button className="control-button" onClick={isRunning ? stop : start}>
                    {isRunning ? "Stop" : "Start"}
                </button>
                <button className="control-button" onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default StopWatch;
