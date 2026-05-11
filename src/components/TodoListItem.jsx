import { useState,useRef } from "react";

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
      <li key={index}>
        {todo.id}
        &nbsp;
        {todo.regDate}
        &nbsp;
        {editMode || (
          <>
            {todo.content}
            &nbsp;
            <button onClick={showEditMode}>수정</button>
            <button onClick={removeTodo}>삭제</button>
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
    </>
  );
}


export default TodoListItem;