import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItem1 from "./Components/Todoitem1";
import TodoItem2 from "./Components/Todoitem2";
import "./App.css";

function App() {
  return (
    <center className="todo-Container">
      <AppName />
      {/* <AppName/> */}
      <AddTodo />
      <div className="items-container">
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  );
}
export default App;
