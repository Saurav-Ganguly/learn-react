import { useState,useEffect } from "react";

function Size() {
const [width,setWidth] = useState(window.innerWidth);
const [height,setHeight] = useState(window.innerHeight);

useEffect(()=>{
    window.addEventListener("resize",handleResize);
    return () => {
        window.removeEventListener("resize",handleResize);
    }
},[]);
 
useEffect(()=>{
    document.title = `Size : ${width} X ${height}`;
},[width,height]);

const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
}

return <div>
    <p>Width : {width}</p>
    <p>Height : {height}</p>
</div>;
}

export default Size;
