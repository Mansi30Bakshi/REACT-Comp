const Errormsg=({items})=>{
  // let foodItems = ['Dal','Apple','Vegetables','Kiwi','Mango','Wheat','Flour'];
  return(
  <>
     {items.length === 0 && <h1>I am very Hungry</h1>} 
  </>);
}
export default Errormsg;