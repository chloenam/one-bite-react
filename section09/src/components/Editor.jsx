import { useState, useRef } from 'react';
import './Editor.css';

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState('');
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // 사용자가 키보드를 누를 때
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  // 추가 버튼 클릭 시
  const onSubmit = () => {
    // 입력칸이 비어있을 때
    if (content === '') {
      contentRef.current.focus(); // 입력하라는 포커스 감
      return;
    }
    // 입력칸이 비어있지 않을 때
    onCreate(content); // content 에 추가
    setContent(''); // 빈값으로 초기화
  };

  return (
    <div className="editor">
      <input type="text" placeholder="new todo..." value={content} onChange={onChangeContent} ref={contentRef} onKeyDown={onKeyDown} />
      <button type="button" onClick={onSubmit}>
        ADD
      </button>
    </div>
  );
};

export default Editor;
