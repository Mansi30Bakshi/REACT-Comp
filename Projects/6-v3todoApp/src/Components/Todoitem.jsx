import { MdDelete } from "react-icons/md";
function TodoItem({ todoName,todoDate,onDelClick }) {
  
  return (
    <div className="container">
      <div className="row SRow">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger Sbutton1" onClick={()=> onDelClick(todoName)}>
          <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
