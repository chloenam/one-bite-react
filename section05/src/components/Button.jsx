// 자식 컴포넌트
const Button = ({ children, text, color = 'black' }) => {
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e);

    console.log(text);
  };
  return (
    <button
      // 이벤트 핸들러
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
