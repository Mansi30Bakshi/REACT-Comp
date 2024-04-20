// import AddTodo from "./Components/AddTodo";
// import AppName from "./Components/AppName";
// import "./App.css"
// // import TodoItem from "./Components/Todoitem";
// // import TodoItem from "./Components/TodoItems";
// import TodoItem from "./Components/TodoItems";
// import TodoItem from "./Components/Todoitem";

// function App() {
//   const todoItem = [{
//     name:"Buy grocery",
//     duedate:"10/10/23",
//   },{
//     name:"Shopping",
//     duedate:"5/10/23",
// }];
//   return (
//     <center classNameNameNameName="todo-Container">
//       <AppName/>
//       {/* <AppName/> */}
//       <AddTodo/>
//       <TodoItems todoitems = {todoItem}/>
//      </center>
//   );
// }
// export default App;

import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItems from "./Components/TodoItems"; // Corrected import path
import TodoItem from "./Components/Todoitem"; // Corrected import path

function App() {
  const todoItem = [
    {
      name: "Buy grocery",
      duedate: "10/10/23",
    },
    {
      name: "Shopping",
      duedate: "5/10/23",
    },
    {
      name: "Dance",
      duedate: "Now",
    },
    {
      name: "smile",
      duedate: "everytime",
    },
  ];
  return (
    <center classNameNameNameName="todo-Container">
      <AppName />
      {/* <AppName/> */}
      <AddTodo />
      <TodoItems todoitems={todoItem} /> {/* Passed todoItem as a prop */}
    </center>
  );
}
export default App;
