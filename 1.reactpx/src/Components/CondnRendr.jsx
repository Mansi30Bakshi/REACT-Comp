let Crender = () => {
  let numbers = ["one", "two", "three", "four", "five", "six", "seven"];
  // let numbers = [];
  // if(numbers.length=== 0){
  //   return <h3>No number here</h3>
  // }

  return (
    <>
      <ul className="list-group">
        <h1>Numbers</h1>
        {numbers.length === 0 ? <h3>No number here</h3> : null}
        {numbers.map((items) => (
          <li key="items" classNameName="list-group-item">
            {items}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Crender;
