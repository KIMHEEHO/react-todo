import TodoListItem from "./TodoListItem"

export default function TodoList ({todosState}) {
  return (
  <>
      <ul>
        {todosState.todos.map((todo, index) => (
        <TodoListItem key={todo.id} todo={todo} index={index} todosState={todosState} />
        ))}
      </ul>
      </>)  
}
