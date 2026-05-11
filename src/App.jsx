import TodoApp from './components/TodoApp'
import useTodosState from './hooks/useTodosState';

function App() {
 const todosState = useTodosState();
  return (
    <>
    <TodoApp todosState={todosState}/>
    </>
  )
}

export default App
