import './App.css';
import Viewer from './components/Viewer';
import ReController from './components/ReController';
import { useState, useEffect, useRef } from 'react';
import Even from './components/Even';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log('mount');
  }, []);
  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log('update');
  });
  // 업데이트 단계에서만 코드를 실행하고 싶을땐 이렇게 사용하면 좋음!

  // 3. 언마운트 : 죽음
  // Even

  // 의존성 배열
  // dependency array
  // deps

  const onClickButton = (value) => {
    setCount(count + value);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <ReController onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
