import { useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
function AddTodo({onNewitem}) {
  const[todoName,settodoName] = useState();
  const[duedate,setduedate]= useState();
  const handleNameChange = (event) => {
    settodoName(event.target.value);
  }
  const handleDateChange=(event) => {
    setduedate(event.target.value);
  }
  const handleAddButton=()=>{
     onNewitem(todoName,duedate);
     settodoName("");
     setduedate("");
  }

  return (
    <div className="row">
      <div className="col-4 Scol">
        <input placeholder="Enter the task here" value={todoName} onChange={handleNameChange}></input>
      </div>
      <div className="col-4">
        <input type="date" value={duedate}onChange={handleDateChange}></input>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success Sbutton" onClick={handleAddButton}>
        <IoAddCircleSharp />

        </button>
      </div>
    </div>
  );
}
export default AddTodo;
