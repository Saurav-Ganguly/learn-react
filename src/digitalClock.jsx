import { useState, useEffect } from "react";
import "./DigitalClock.css"; // Add this import for the styles

function DigitalClock() {
    const [time, setTime] = useState(new Date());
    const [isMilitaryTime, setIsMilitaryTime] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    const toggleTimeFormat = () => {
        setIsMilitaryTime(!isMilitaryTime);
    };

    const formatHours = (hours) => {
        if (isMilitaryTime) {
            return hours.toString().padStart(2, '0');
        }
        return (hours % 12 || 12).toString().padStart(2, '0');
    };

    const hours = formatHours(time.getHours());
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    const ampm = isMilitaryTime ? '' : (time.getHours() >= 12 ? 'PM' : 'AM');

    return (
        <div className="clock-container">
            <div className="clock">
                <span className="time-unit">{hours}</span>
                <span className="separator">:</span>
                <span className="time-unit">{minutes}</span>
                <span className="separator">:</span>
                <span className="time-unit">{seconds}</span>
                {!isMilitaryTime && (
                    <span className="ampm">{ampm}</span>
                )}
            </div>
            <button onClick={toggleTimeFormat} className="toggle-button">
                {isMilitaryTime ? "12-hour" : "24-hour"}
            </button>
        </div>
    );
}   

export default DigitalClock;
