import { useState } from 'react';

// 함수 이름 앞에 use를 작성해주면 hook이라고 판단하여 오류없이 적용 가능
// 반복되어 동작하는 로직이 있고, 해당 로직이 useState와 같은 훅을 사용하는 로직이라면
// 커스텀 훅을 만들어서 분리하여 사용할 수 있고, 여러번 반복하여 사용도 가능함.
function useInput() {
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
