import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from "./Components/FoodItem";
import Errormsg from "./Components/Errormsg";
import "./App.css";
import Container from "./Components/Container";

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
    <Container>
      <h1 className="Heading">Healthy Foods</h1>
      <Errormsg items={foodItems} />
      <FoodItem items={foodItems} />
    </Container>
    <Container>Above is list of good food everyone should eat everyday.</Container>
    </>
  );
}
export default App;
