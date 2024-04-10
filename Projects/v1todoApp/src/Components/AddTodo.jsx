function AddTodo() {
  return(
  <div class="row">
    <div class="col-4 Scol">
      <input placeholder="Enter the task here"></input>
    </div>
    <div class="col-4">
      <input type="date"></input>
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-success Sbutton">
        Add
      </button>
    </div>
  </div>
  );
}
export default AddTodo;
