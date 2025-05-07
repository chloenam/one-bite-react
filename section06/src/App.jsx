import './App.css';
import Viewer from './components/Viewer';
import ReController from './components/ReController';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const onClickButton = (value) => {
    setCount(count + value);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <ReController onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
