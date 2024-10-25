import {useState, useEffect, useRef} from "react";

function MyRef(){
    const [number, setNumber] = useState(0);
    const inputRef = useRef(null);
    const handleClick = () => {
        setNumber(n => n + 1);
    }
    useEffect(() => {
        console.log("Number updated to: ", number);
    });
    return <div>
        <h1>My Ref</h1>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>Click Me</button>
        <p>{number}</p>
    </div>;
}

export default MyRef;   