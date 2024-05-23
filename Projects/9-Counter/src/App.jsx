import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter] = useState(15);
  // let counter = 15;
  const addValue = () =>{
    // console.log("CLicked",counter);
    // counter += 1;
    if(counter < 20)
    setcounter(counter+1);
  }
  const subValue = () =>{
    if(counter > 0)
    setcounter(counter-1);
  }
  return(
    <>
    <h1>YO</h1>
    <h2>CounterValue : {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br/>
    <br/>
    <button onClick={subValue}>Subtract Value</button>
    </>
  )
  }

export default App
