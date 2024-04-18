import { useRef} from "react";
import { IoAddCircleSharp } from "react-icons/io5";
function AddTodo({onNewitem}) {
  // const[todoName,settodoName] = useState();
  // const[duedate,setduedate]= useState();
  const todoNameElem = useRef();
  const dueDateElem = useRef();
  // const handleNameChange = (event) => {
  //   settodoName(event.target.value);
  //   numofUpdates.current += 1;
  // }
  // const handleDateChange=(event) => {
  //   setduedate(event.target.value);
  //   console.log(numofUpdates.current);
  // }
  const handleAddButton=(event)=>{
  //  console.log(event);
   event.preventDefault();
     const todoName = todoNameElem.current.value;
     const duedate = dueDateElem.current.value;
    //  settodoName("");
    //  setduedate("");
    todoNameElem.current.value= "";
    dueDateElem.current.value="";
    onNewitem(todoName,duedate);

  }

  return (
    <form className="row" onSubmit={handleAddButton}>
      {/* <form action=""> */}
      <div className="col-4 Scol">
        <input ref={todoNameElem}placeholder="Enter the task here" 
        // value={todoName} 
        // onChange={handleNameChange}
        >

        </input>
      </div>
      <div className="col-4">
        <input type="date" ref={dueDateElem}
        // value={duedate}
        // onChange={handleDateChange}
        ></input>
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-success Sbutton">
        <IoAddCircleSharp />
       
        </button>
        </div>
      </form>
  );
}
export default AddTodo;
