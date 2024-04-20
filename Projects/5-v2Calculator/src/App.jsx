import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display from "./Components/display";
import ButtonCon from "./Components/ButtonCon";
import { useState } from "react";
function App() {
  let [calVal, setcalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setcalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setcalVal(result);
    } else {
      const newDispplayVal = calVal + buttonText;
      setcalVal(newDispplayVal);
    }
  };

  return (
    <div classNameNameNameName={styles.calculator}>
      <Display displayVal={calVal} />
      <ButtonCon onButtonClick={onButtonClick} />
    </div>
  );
}
export default App;
