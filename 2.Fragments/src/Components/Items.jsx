const Items = ({ foodItemss }) => {
  const HandleButtonClick=(event)=>{
    console.log(event);
    console.log(`${foodItemss} being clicked`)
  }
  // let {foodItemss} = props;
  return (
    <li className="list-group-item">
      <span>{foodItemss}</span>
      <button className={"But btn btn-warning "}
    onClick={(event)=> HandleButtonClick(event)}>
    Buy
    </button>
    </li>
  );
};

export default Items;
