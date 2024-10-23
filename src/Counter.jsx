import { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [animation, setAnimation] = useState('');

    useEffect(() => {
        setAnimation('');
    }, [animation]);

    const handleIncrease = () => {
        setCount(prevCount => prevCount + 1);
        setAnimation('increase');
    };

    const handleDecrease = () => {
        setCount(prevCount => prevCount - 1);
        setAnimation('decrease');
    };

    return (
        <div className="counter-container">
            <h1 className="counter-heading">Counter</h1>
            <h2 className={`counter-display ${animation}`}>{count}</h2>
            <div className="button-group">
                <button className="counter-button increase" onClick={handleIncrease}>
                    <span className="button-text">Increase</span>
                </button>
                <button className="counter-button reset" onClick={() => setCount(0)}>
                    <span className="button-text">Reset</span>
                </button>
                <button className="counter-button decrease" onClick={handleDecrease}>
                    <span className="button-text">Decrease</span>
                </button>
            </div>
        </div>
    );
}

export default Counter;
