import Items from './Items';

const FoodItem = ({items}) => {
//  let foodItems = ['Dal', 'Apple', 'Vegetables', 'Kiwi', 'Mango', 'Wheat', 'Flour'];
 return (
    <ul className="list-group">
      {items.map((item)  => <Items key={item} foodItemss={item} />)}
    </ul>
 );
};
export default FoodItem;