import { useRef } from "react";

const App=()=>{
  // const inputElem = document.getElementById("myInput");
  // const HandleSubmit=()=>{
  //     console.log(inputElem.value);
  // }
  const HandleSubmit = () =>{
    const value = inputRef.current.value;
    inputRef.current.style.backgroundColor='red';
    inputRef.current.focus();
    console.log(value);
  }
  const inputRef = useRef(null);
  return(
  <>
  <input ref={inputRef}type="text" id="myInput" placeholder="Enter a value"></input>
  <button onClick={HandleSubmit}>Focus</button>
  </>
  );
}
export default App;