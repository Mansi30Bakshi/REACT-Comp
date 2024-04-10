function TodoItem2(){
  let todoName = 'Buy salt';
  let todoDate = "14/12/23";
  return (
  <div class="container">
  <div class="row SRow">
          <div class="col-4">
            {todoName}
          </div>
          <div class="col-4">
            {todoDate}
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-danger Sbutton1">Delete</button>
          </div>
          </div>
          </div>
          );
}
export default TodoItem2