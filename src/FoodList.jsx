import React, { useState } from 'react';
import './FoodList.css';
import Modal from './Modal'; 

function FoodList() {
    const [foods, setFoods] = useState([
        {id: 1, name: 'carrot', quantity: 10, calories: 41},
        {id: 2, name: 'broccoli', quantity: 5, calories: 34},
        {id: 3, name: 'apple', quantity: 10, calories: 95},
        {id: 4, name: 'banana', quantity: 20, calories: 105},
        {id: 5, name: 'cherry', quantity: 20, calories: 100}
    ]);
    const [newFood, setNewFood] = useState({ name: '', quantity: 0, calories: 0 });
    const [editingFood, setEditingFood] = useState(null);

    const handdleAddFood = (food) => {
        setFoods([...foods, {id: foods.length + 1, name: food.name, quantity: food.quantity, calories: food.calories}]);
    }
    const handleDeleteFood = (id) => {
        setFoods(foods.filter(food => food.id !== id));
    }
    const handleUpdateFood = (id, updatedFood) => {
        setFoods(foods.map(food => food.id === id ? { ...food, ...updatedFood } : food));
        setEditingFood(null);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewFood({ ...newFood, [name]: value });
    };

    const handleEditFood = (food) => {
        setEditingFood(food);
    };

    return (
        <div className="food-list-container">
            <h2>Food List</h2>
            <ul className="food-items">
                {foods.map(food => (
                    <li key={food.id} className="food-item">
                        <span className="food-name">{food.name}</span>
                        <span className="food-quantity">{food.quantity}</span>
                        <span className="food-calories">{food.calories} cal</span>
                        <button onClick={() => handleEditFood(food)} className="edit-btn">✏️</button>
                        <button onClick={() => handleDeleteFood(food.id)} className="delete-btn">X</button>
                    </li>
                ))}
            </ul>
            <div className="add-food-form">
                <h4>Add Food</h4>
                <input
                    type="text"
                    name="name"
                    value={newFood.name}
                    onChange={handleInputChange}
                    placeholder="Food name"
                    className="food-input"
                />
                <input
                    type="number"
                    name="quantity"
                    value={newFood.quantity}
                    onChange={handleInputChange}
                    placeholder="Quantity"
                    className="food-input"
                />
                <input
                    type="number"
                    name="calories"
                    value={newFood.calories}
                    onChange={handleInputChange}
                    placeholder="Calories"
                    className="food-input"
                />
                <button onClick={() => handdleAddFood(newFood)} className="add-btn">Add Food</button>
            </div>
            {editingFood && (
                <Modal onClose={() => setEditingFood(null)}>
                    <h3>Edit Food</h3>
                    <input
                        type="text"
                        name="name"
                        value={editingFood.name}
                        onChange={(e) => setEditingFood({ ...editingFood, name: e.target.value })}
                        className="food-input"
                    />
                    <input
                        type="number"
                        name="quantity"
                        value={editingFood.quantity}
                        onChange={(e) => setEditingFood({ ...editingFood, quantity: parseInt(e.target.value) })}
                        className="food-input"
                    />
                    <input
                        type="number"
                        name="calories"
                        value={editingFood.calories}
                        onChange={(e) => setEditingFood({ ...editingFood, calories: parseInt(e.target.value) })}
                        className="food-input"
                    />
                    <button onClick={() => handleUpdateFood(editingFood.id, editingFood)} className="update-btn">Update Food</button>
                </Modal>
            )}
        </div>
    );
}

export default FoodList;
