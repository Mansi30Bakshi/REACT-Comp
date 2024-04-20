import { useState } from "react";
import Items from "./Items";

const FoodItem = ({ items }) => {
  //  let foodItems = ['Dal', 'Apple', 'Vegetables', 'Kiwi', 'Mango', 'Wheat', 'Flour'];
  let [activeItems, setactiveItems] = useState([]);
  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setactiveItems(newItems);
  };
  return (
    <ul classNameNameNameName="list-group">
      {items.map((item) => (
        <Items
          key={item}
          foodItemss={item}
          HandleButtonClick={() => onBuyButton(item, event)}
          bought={activeItems.includes(item)}
        />
      ))}
    </ul>
  );
};
export default FoodItem;
