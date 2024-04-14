const Items = ({ foodItemss,bought,HandleButtonClick }) => {
  // let {foodItemss} = props;
  return (
    <li className={`list-group-item ${bought ? "active" : ""}`}>
      <span>{foodItemss}</span>
      <button className={"But btn btn-warning "}
    onClick={HandleButtonClick}>
    Buy
    </button>
    </li>
  );
};

export default Items;
