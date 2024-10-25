import { useState,useEffect } from "react";

function MyEffect() {
  const [count,setCount] = useState(0);
  const [color,setColor] = useState("green");
  useEffect(()=>{
    document.title = `Count : ${count} ${color}`;
    return () => {
      //cleanup function
      document.title = "React App";
    }
  },[count]);
  const changeColor = () => {
    setColor(color === "green" ? "red" : "green");
  }
  return <div>
    <p style={{color:color}}>count:{count}</p>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(count-1)}>Subtract</button>
    <button onClick={changeColor}>Change Color</button>
  </div>;
}

export default MyEffect;
