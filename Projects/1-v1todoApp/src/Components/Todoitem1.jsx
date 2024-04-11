function TodoItem1() {
  let todoName = "Buy sugar";
  let todoDate = "4/10/23";
  return (
    <div className="container">
      <div className="row SRow">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger Sbutton1">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
