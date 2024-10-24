import {useState} from 'react';

function MyComponent() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: 1964
    });
    const updateYear = (e) => {
        setCar(car => ({...car, year: e.target.value}));
    }
    const updateBrand = (e) => {
        setCar(car => ({...car, brand: e.target.value}));
    }   
    const updateModel = (e) => {
        setCar(car => ({...car, model: e.target.value}) );
    }
    return (

        <>
           <p>Your favorite car is {car.brand} {car.model} {car.year}</p>
            <input type="number" value={car.year} onChange={updateYear} /><br />
            <input type="text" value={car.brand} onChange={updateBrand} /><br />
            <input type="text" value={car.model} onChange={updateModel} /><br />
        </>
    );
}

export default MyComponent;