import React from 'react';
import { useState } from 'react';

function App() {
  const [count,setcount] = useState(12);
  const incCount = () =>{
    if(count < 30)
    setcount((prev) => prev+1);
    setcount((prev) => prev+1);
    setcount((prev) => prev+1);
    setcount((prev) => prev+1);
  }
  const decCount = () =>{
    if(count > 0)
    setcount((prev) => prev - 3);
  }
  return (
    <>
     <h1>Count :{count} </h1>
     <button onClick={incCount}>Increment by 4</button>
     <br/>
     <br/>
     <button onClick={decCount}>Decrement by 3</button>
    </>
  );
}

export default App;
