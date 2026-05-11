import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRef } from 'react';

// 할 일 입력 폼
export default function NewTodoForm({ todosState }) {
    const textRef = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    form.content.value = form.content.value.trim();

    if (form.content.value.length == 0) {
      alert("할 일을 입력해 주세요");
        textRef.current.focus();

      return;
    }

    todosState.addTodo(form.content.value);
    form.content.value = "";
    textRef.current.focus();
  };

  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col mt-4 px-4 gap-2">
        <TextField ref={textRef} autoComplete="off" name="content" label="할 일을 입력해 주세요" variant="outlined" />
        <Button variant='contained' type='submit'>추가</Button>
        <Button variant='contained' type='reset'>취소</Button>
      </form>
    </>
  );
}