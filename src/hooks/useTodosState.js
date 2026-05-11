import { useState, useRef } from "react";
import { dateToStr } from "../utils/date";

export default function useTodosState() {
  const [todos, setTodos] = useState([]);
  const lastTodoIdRef = useRef(0);

  const addTodo = (newContent) => {
    const id = ++lastTodoIdRef.current;

    const newTodo = {
      id,
      content: newContent,
      regDate: dateToStr(new Date())
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const removeTodo = (index) => {
    const newTodo = todos.filter((_, _index) => _index != index);
    setTodos(newTodo);
  };

  const modifyTodo = (index, newContent) => {
    const newTodo = todos.map((todo, _index) =>
      _index != index ? todo : { ...todo, content: newContent }
    );
    setTodos(newTodo);
  };

  return { todos, addTodo, removeTodo, modifyTodo };
    
}