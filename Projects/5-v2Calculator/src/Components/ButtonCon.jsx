import styles from "../App.module.css"
const ButtonCon=({onButtonClick})=>{
  const ButtonNames = ['C','1','2','3','4','5','6','7','8','9','0','+','-','*','/','=','.'];
 return(
  <div className={styles.container}>
      {
        ButtonNames.map(ButtonName => <button className={styles.buttonCon} onClick={()=>onButtonClick(ButtonName)}>{ButtonName}</button>)
      }
      </div>
 )
}
export default ButtonCon;