import {react,useState} from "react";
const App=()=>{
  const [Dish, setDish] = useState("momos");
  console.log(Dish);
  const change=(event)=>{
    const newVal = event.target.value;
    setDish(newVal);
  }
  return(
      <> 
      <h1>{Dish}</h1>
      <input type="text"  value={Dish} placeholder="write your favourite food" onChange={change}></input>
      </>
  );
}
export default App;