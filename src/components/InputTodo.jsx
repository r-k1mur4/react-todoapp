import React from "react";

// CSS-in-JS
const style = {
    display: 'flex'
}
const styleInput = {
  border: 'none',
  borderBottom: '2px solid #ccc',
  padding: '5px 10px',
  marginRight: '10px',
  fontSize: '16px',
  transition: 'border-color 0.3s ease'
}
const styleInputFocus = {
  outline:'none',
  borderColor: '#1abc9c'
}

// TODO入力欄のコンポーネント
export const InputTodo = (props) => {

  // popsから受け取った値を分割代入で取得
  const { todoText, onChange, onClick } = props;

  return (
    <>
      <div style={style}>
        {/* inputの変更がかかった際にonChangeTodoTextを実行 */}
        <input
          type="text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChange}
          style={styleInput}
        />
        <button onClick={onClick}>追加</button>
      </div>
    </>
  );
};
