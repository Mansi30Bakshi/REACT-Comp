import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from "./Components/FoodItem";
import Errormsg from "./Components/Errormsg";
import "./App.css";
import Container from "./Components/Container";
import foodInput from "./Components/FoodInput";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  // let textStateArr = useState("Items entered by user");
  // let textshow = textStateArr[0];
  // let settextState = textStateArr[1];
  let[textshow , settextshow] = useState();
  // console.log(`Current value of text state : ${textshow}`);
  let [foodItems,SetfoodItems] = useState([]);
    // let foodItems = [];
  // let vegetables = [];
  // if(vegetables.length ===  0 & foodItems.length === 0){
  //  return <h3>I m still hungry</h3>
  // }

  const handleKeydown=(event)=>{
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      event.target.value = '';
      let newItems = [...foodItems,newFoodItem];
      SetfoodItems(newItems);
    }
    // console.log(event);
    // //textshow=event.target.value; //it will not change because our components are stateless
    // settextshow(event.target.value);
  }
  return (
    <>
    <Container>
      <h1 className="Heading">Healthy Foods</h1>
      <FoodInput handleKeydown={handleKeydown}/>
      <Errormsg items={foodItems} />
     {/* <p>{textshow}</p> */}
      <FoodItem items={foodItems} />
    </Container>
    <Container>Above is list of good food everyone should eat everyday.</Container>
    </>
  );
}
export default App;
