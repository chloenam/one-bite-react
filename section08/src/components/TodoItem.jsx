import './TodoItem.css';

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
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

export default TodoItem;
