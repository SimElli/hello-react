import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/button";

function App() {

  const [ text, setText ] = useState("Click me!");

  function goodClick() {
    setText("Good man!");
  }

  function noGoodClick() {
    console.log("You are a bad person!");
  }

  return (
    <div>
      <p>Hello React</p>
        <Button text={text} handleClick={goodClick}/>
        <Button text="Don't click me!" handleClick={noGoodClick}/>
    </div>
  );
}

export default App;
