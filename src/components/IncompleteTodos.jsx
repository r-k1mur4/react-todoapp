import React from "react";

export const IncompleteTodos = (props) => {
  // popsから受け取った値を分割代入で取得
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    <div className="todo-section">
      <h2 className="title">未完了のTODO</h2>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li>
              <div key={todo} className="todo-item">
                <span>{todo}</span>
                <div>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
