import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItems from "./Components/TodoItems"; // Corrected import path
import TodoItem from "./Components/Todoitem"; // Corrected import path
import { useState } from "react";
import Welcome from "./Components/Welcome";

function App() {
  // const i_todoItems = [];

  const [todoItem,settodoItem] = useState([]);
  const handleNewItem = (item_name,item_duedate)=>{
     console.log(`New item added named ${item_name} an its duedate is ${item_duedate}`);
     const newtodoItems = [...todoItem,{name:item_name,duedate:item_duedate}];
     settodoItem(newtodoItems);
    };

  const HandleDeleteItem=(todoName) =>{
    const newtodoItem = todoItem.filter(item => item.name !== todoName);
    settodoItem(newtodoItem);
  }
  return (
    <center classNameName="todo-Container">
      <AppName />
      {/* <AppName/> */}
      <AddTodo onNewitem={handleNewItem}/>
      <Welcome todoitems={todoItem}/>
      <TodoItems todoitems={todoItem} onDelClick={HandleDeleteItem} /> {/* Passed todoItem as a prop */}
    </center>
  );
}
export default App;
