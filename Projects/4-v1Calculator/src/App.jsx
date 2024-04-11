import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display from "./Components/display"; 
import ButtonCon from "./Components/ButtonCon";
function App(){
   return(
    <div className={styles.calculator}>
      <Display/>
      <ButtonCon/>
      </div>
   )
}
export default App;