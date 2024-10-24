import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Student from "./Student.jsx";
import Button from "./Button.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import ColorPicker from "./ColorPicker.jsx";
import FoodList from "./FoodList.jsx";
import Todo from "./todo.jsx";
function App() {
  const fruits = [
    {id :  1, name: 'apple', quantity: 10, calories: 95},  
    {id: 2, name: 'banana', quantity: 20, calories: 105},
    {id: 3, name: 'cherry', quantity: 20, calories: 100}
  ];
  const vegetables = [
    {id: 1, name: 'carrot', quantity: 10, calories: 41},
    {id: 2, name: 'broccoli', quantity: 5, calories: 34}
  ];
  return (
    <>
      <Todo />
    </>
  );
}

export default App;
