import styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeydown }) => {
  return (
    <input
      type="text"
      placeholder="Enter foodItem here"
      classNameNameNameName={styles.FoodItem}
      onKeyDown={handleKeydown}
    />
  );
};
export default FoodInput;
