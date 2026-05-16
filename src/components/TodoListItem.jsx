import { useState,useRef } from "react";
import Chip from '@mui/material/Chip';

function TodoListItem({ todosState, todo, index }) {
const [editMode, setEditMode] = useState(false);
  const [editedContent, setEditedContent] = useState(todo.content);
  const editedContentInputRef = useRef(null);

  // 할 일 삭제
  const removeTodo = () => {
    todosState.removeTodo(index);
  };

  // 할 일 수정
  const showEditMode = () => {
    setEditMode(true);
  };

  // 수정 완료
  const commitEdit = () => {
    if (editedContent.trim().length == 0) {
      alert("할 일을 입력해 주세요");
      editedContentInputRef.current.focus();
      return;
    }
    
    todosState.modifyTodo(index, editedContent.trim());
    setEditMode(false);
  };
  
  // 수정 취소
  const cancelEdit = () => {
    setEditMode(false);
    setEditedContent(todo.content);
  };

  return (
    <>
    <div className="mt-4 px-4">
      <li key={index} className="mt-10">
        <Chip label={`번호 : ${todo.id}`} variant="outlined" />
        &nbsp;
        <Chip label={todo.regDate} color="primary" variant="outlined" />
        &nbsp;
        {editMode || (
          <>
          <div className="pt-4 p-10 shadow rounded-[20px] whitespace-pre-wrap leading-relaxed" >
            {todo.content}
            &nbsp;
            <button onClick={showEditMode}>수정</button>
            <button onClick={removeTodo}>삭제</button>
            </div>
          </>
        )}
        {editMode && (
          <>
            <input
              ref={editedContentInputRef}
              type="text"
              placeholder="할 일을 입력해 주세요."
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
            <button onClick={commitEdit}>수정완료</button>
            <button onClick={cancelEdit}>수정취소</button>
          </>
        )}
      </li>
      </div>
    </>
  );
}


export default TodoListItem;