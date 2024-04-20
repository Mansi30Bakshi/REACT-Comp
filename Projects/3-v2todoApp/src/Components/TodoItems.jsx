import TodoItem from "./Todoitem";
const TodoItems = ({ todoitems }) => {
  if (!Array.isArray(todoitems)) {
    return <div>No todo items</div>; // or handle the case where todoitems is not an array
  }
  return (
    <>
      <div classNameNameNameName="items-container">
        {todoitems.map((todo, index) => (
          <TodoItem
            key={index}
            todoName={todo.name}
            todoDate={todo.duedate}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
