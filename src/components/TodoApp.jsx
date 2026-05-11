import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

export default function TodoApp({ todosState }) {
  return (
    <>
      <NewTodoForm todosState={todosState} />
      <TodoList todosState={todosState} />
    </>
  );
}
