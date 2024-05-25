import React, { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [count,setcount] = useState(0);
  const [name,setname] = useState("Mansi");
  useEffect(() => {
    setTimeout (() =>{
       setcount((prev) => prev + 1);
    },2000)
  },[name])
  
  return (
    <>
    <h1>I've rendered {count} times!</h1>
    </>
  )
}

export default App