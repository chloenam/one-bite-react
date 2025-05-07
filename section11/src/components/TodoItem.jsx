import { memo, useContext } from 'react';
import './TodoItem.css';
import { TodoDispatchContext } from '../App';

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDeleteButton = () => {
    onDelete(id);
  };
  return (
    <div className="box__todo-item">
      {/* input은 onClick이 아닌 onChange 사용 */}
      <input onChange={onChangeCheckbox} readOnly checked={isDone} type="checkbox" />
      <div className="text__content">{content}</div>
      <div className="text__date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton} type="button">
        삭제
      </button>
    </div>
  );
};

// 고차 컴포넌트(HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환값에 따라, Props가 바뀌엇는지 안바뀌었는지 판단
//   // T -> props 바뀌지 않은 -> 리렌더링 x
//   // F -> props 바뀜 -> 리렌더링 o

//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;
//   return true;
// });

export default memo(TodoItem);
