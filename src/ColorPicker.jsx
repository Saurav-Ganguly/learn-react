import { useState } from 'react';
import './ColorPicker.css'; // We'll create this file for styles

function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(e) {
        setColor(e.target.value);
    }

    return (
        <div className="color-picker-container">
            <h1 className="title">Elegant Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p className="color-value">{color}</p>
            </div>
            <div className="color-input-container">
                <input 
                    type="color" 
                    value={color} 
                    onChange={handleColorChange}
                    className="color-input"
                />
                <label className="color-label">Choose your color</label>
            </div>
        </div>
    );
}

export default ColorPicker;
