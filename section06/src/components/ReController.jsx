import React from 'react';

const Controller = ({ onClickButton }) => {
  const values = [-100, -10, -1, 1, 10, 100];

  return (
    <div>
      {values.map((value) => (
        <button key={value} onClick={() => onClickButton(value)}>
          {value > 0 ? `+${value}` : value}
        </button>
      ))}
    </div>
  );
};

export default Controller;
