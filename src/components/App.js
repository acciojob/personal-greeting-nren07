
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [nameStr,setNameStr]=useState("");
  return (
    <div>
        <lable for="nameField">Enter Your Name:</lable>
        <input onChange={(e)=>{setNameStr(e.target.value)}
          } type="text" id="nameField"></input>
        <div>Hello {nameStr} !</div>
    </div>
  )
}

export default App
