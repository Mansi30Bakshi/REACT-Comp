import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

function App() {
  const [value,setvalue] = useState(1);
  const count = useRef(19);
  console.log(count)
  
  useEffect(()=> {
     count.current = count.current + 1; 
  });
  const IncCount = () =>{
    setvalue((prev) => prev + 1);
  }
  const InputEle = useRef()
  const btnClicked = () => {
    console.log(InputEle.current)
    InputEle.current.style.background = "blue"
  }
  return (
    <>
    <button onClick={() => {
      setvalue((prev => prev - 1));
    }}>MINUS</button>
    <h1>Count : {value}</h1>
    <button onClick={IncCount}>PLUS</button>
    <h1>Render Count : {count.current}</h1>
    <input type="text" ref={InputEle}/>
    <button onClick={btnClicked}>Click Here!</button>
    </>
  )
}

export default App