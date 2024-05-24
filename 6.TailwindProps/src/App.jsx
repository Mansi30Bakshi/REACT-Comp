import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name:"Mansi",
    age:21
  }
  let myArr=[
    1,2,3
  ]

  return (
    <>
      <h1 className='bg-pink-400 text-white padding-4 rounded mb-4'>Tailwind test</h1>
      <Card apple="yo yo honey singh" banana={myObj} cat={myArr}/>
      <Card apple="Gippy Grewal" banana="" cat={myArr}/>
    </>
  )
}

export default App
