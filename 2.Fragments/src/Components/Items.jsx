const Items = ({ foodItemss, bought, HandleButtonClick }) => {
  // let {foodItemss} = props;
  return (
    <li classNameNameNameName={`list-group-item ${bought ? "active" : ""}`}>
      <span>{foodItemss}</span>
      <button
        classNameNameNameName={"But btn btn-warning "}
        onClick={HandleButtonClick}
      >
        Buy
      </button>
    </li>
  );
};

export default Items;
