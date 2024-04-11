import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from "./Components/FoodItem";
import Errormsg from "./Components/Errormsg";
import "./App.css";
function App() {
  let foodItems = [
    "Dal",
    "Apple",
    "Vegetables",
    "Kiwi",
    "Mango",
    "Wheat",
    "Flour",
    "Sabji",
    "spinach",
    "paalak",
  ];
  // let foodItems = [];
  // let vegetables = [];
  // if(vegetables.length ===  0 & foodItems.length === 0){
  //  return <h3>I m still hungry</h3>
  // }
  return (
    <>
      <h1 classNameName="Heading">Healthy Foods</h1>
      <Errormsg items={foodItems} />
      <FoodItem items={foodItems} />
    </>
  );
}
export default App;
