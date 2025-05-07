import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { useState, useRef } from 'react';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '빨래하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '운동하기',
    date: new Date().getTime(),
  },
];
function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    // todos.push(newTodo)
    // push와 같은 메서드로 state 값을 직접적으로 변경해주는게 아닌 제공된
    // set 함수를 사용하여 리렌더링 될 수 있도록 해야한다.

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    // todos State 값들 중에 targetId와 일치하는 id를  갖는 투두 아이템의 isDone 값 변경
    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodos(
      // todos.map((todo) => {
      //   if (todo.id === targetId) {
      //     return {
      //       ...todo,
      //       isDone: !todo.isDone,
      //     };
      //   }
      //   return todo;
      // })
      // 코드 단축
      todos.map((todo) => (todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo))
    );
  };

  const onDelete = (targetId) => {
    // 인수 : todos 배열에서 targetId와 일치하는 Id를 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <>
      <div className="box__todo-list">
        <Header />
        <Editor onCreate={onCreate} />
        <List onUpdate={onUpdate} onDelete={onDelete} todos={todos} />
      </div>
    </>
  );
}

export default App;
