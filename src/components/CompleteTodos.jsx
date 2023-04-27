import React from "react";

export const CompleteTodos = (props) => {

  // propsから受け取った値を分割代入で取得
  const { completeTodos, onClickBack } = props;

  return (
    <div className="todo-section">
      <h2 className="title">完了したTODO</h2>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <li>
              <div key={todo} className="todo-item">
                <span>{todo}</span>
                <div>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
