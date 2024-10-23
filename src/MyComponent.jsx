import {useState} from 'react';

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const [gender, setGender] = useState("male");
    const [isMarried, setIsMarried] = useState(false);
    return (
        <>
            <div>
                <h1>{name}</h1>
                <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <h1>{age}</h1>
                <button onClick={() => setAge(age + 1)}>Increase Age</button>
                <button onClick={() => setAge(age - 1)}>Decrease Age</button>
            </div>
            <div>
                <h1>{isEmployed ? "Employed" : "Unemployed"}</h1>
                <button onClick={() => setIsEmployed(!isEmployed)}>Change Employment Status</button>
            </div>
            <div>
                <h1>{gender}</h1>
                <select onChange={(e) => setGender(e.target.value)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div>
                <h1>{isMarried ? "Married" : "Single"}</h1>
                <label>
                    <input 
                        type="radio" 
                        checked={isMarried} 
                        onChange={() => setIsMarried(true)} 
                        value="married" 
                    />
                    Married
                </label>
                <label>
                    <input 
                        type="radio" 
                        checked={!isMarried} 
                        onChange={() => setIsMarried(false)} 
                        value="single" 
                    />
                    Single
                </label>
            </div>
        </>
        
        
    );
}

export default MyComponent;