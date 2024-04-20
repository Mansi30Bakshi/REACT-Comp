import { MdDelete } from "react-icons/md";
function TodoItem({ todoName, todoDate, onDelClick }) {
  return (
    <div classNameNameNameName="container">
      <div classNameNameNameName="row SRow">
        <div classNameNameNameName="col-6">{todoName}</div>
        <div classNameNameNameName="col-4">{todoDate}</div>
        <div classNameNameNameName="col-2">
          <button
            type="button"
            classNameNameNameName="btn btn-danger Sbutton1"
            onClick={() => onDelClick(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
