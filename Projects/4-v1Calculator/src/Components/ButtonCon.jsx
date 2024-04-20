import styles from "../App.module.css";
const ButtonCon = () => {
  const ButtonNames = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    "=",
    ".",
  ];
  return (
    <div classNameNameNameName={styles.container}>
      {ButtonNames.map((ButtonName) => (
        <button classNameNameNameName={styles.buttonCon}>{ButtonName}</button>
      ))}
    </div>
  );
};
export default ButtonCon;
