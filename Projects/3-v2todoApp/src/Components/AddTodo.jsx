function AddTodo() {
  return (
    <div className="row">
      <div className="col-4 Scol">
        <input placeholder="Enter the task here"></input>
      </div>
      <div className="col-4">
        <input type="date"></input>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success Sbutton">
          Add
        </button>
      </div>
    </div>
  );
}
export default AddTodo;
