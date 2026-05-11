import { Toolbar } from '@mui/material';
import TodoApp from './components/TodoApp'
import useTodosState from './hooks/useTodosState';
import AppBar from '@mui/material/AppBar';
import { useEffect } from 'react';

function App() {
 const todosState = useTodosState();
 
 // useEffect를 활용하여 앱이 실행될 때 기본 할 일을 추가
 useEffect(()=>{
  todosState.addTodo('react 공부하기');
  todosState.addTodo('정처기 공부하기');
  todosState.addTodo('기말고사 준비하기');
 }, 
// eslint-disable-next-line react-hooks/exhaustive-deps
 []);

  return (
    <>
    <AppBar position="fixed">
      <Toolbar>
        <div className='flex-1'></div>
        <div className='font-bold'>TODO LIST</div>
        <div className='flex-1'></div>
      </Toolbar>
    </AppBar>
    <Toolbar />
    <TodoApp todosState={todosState}/>
    </>
  )
}

export default App
