import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(
    ["aaaaa", "bbbbb", "ccccc"]
  );
  const [completeTodos, setCompleteTodos] = useState(["ddddd", "eeeee"]);

  return (
    <div className="app">
      <div className="header">
        <h1>TODOアプリ</h1>
        <div className="input-container">
          <input type="text" placeholder="TODOを入力" />
          <button>追加</button>
        </div>
      </div>

      <div className="todo-container">
        <div className="todo-section">
          <h2 className="title">未完了のTODO</h2>
          <ul>
            {incompleteTodos.map((todo) => {
              return (
                <li>
                  <div key={todo} className="todo-item">
                    <span>{todo}</span>
                    <div>
                      <button>完了</button>
                      <button>削除</button>
                    </div>
                  </div>
                </li>
              );
            })}

          </ul>
        </div>

        <div className="todo-section">
          <h2 className="title">完了したTODO</h2>
          <ul>
            {completeTodos.map((todo) => {
              return (
                <li>
                  <div key={todo} className="todo-item">
                    <span>{todo}</span>
                    <div>
                      <button>戻す</button>
                    </div>
                  </div>
                </li>
              );
            }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
