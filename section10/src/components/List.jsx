import { useMemo, useState } from 'react';
import './List.css';
import TodoItem from './TodoItem';

const List = ({ todos, onUpdate, onDelete }) => {
  // search 바 구현
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  //filter 처리
  const getFilteredData = () => {
    if (search === '') {
      return todos;
    }
    return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
  };

  const filteredTodos = getFilteredData();

  // const getAnalyzedData = () => {
  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((todo) => todo.isDone).length;
  //   const notDoneCount = totalCount - doneCount;

  //   return {
  //     totalCount,
  //     doneCount,
  //     notDoneCount,
  //   };
  // };

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log('호출');
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);
  //의존성배열 : deps

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  return (
    <div className="list__todo">
      <h4>Todo List 🧃</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input value={search} onChange={onChangeSearch} type="text" placeholder="검색어를 입력하세요" />
      <div className="box__todo-wrap">
        {/* map 메서드로 배열에 담긴 데이터를 리스트 형태로 렌더링 할 수 있음 + html 뿐만아니라 컴포넌트도 반환 가능 + 고유한 키값 필요함 */}
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />;
        })}
      </div>
    </div>
  );
};

export default List;
