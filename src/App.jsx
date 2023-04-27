import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  // 未完了のtodoリストを管理するState
  const [incompleteTodos, setIncompleteTodos] = useState([
    "NotYetaaaaa",
    "NotYetbbbbb",
    "NotYetccccc",
  ]);
  // 完了のtodoリストを管理するState
  const [completeTodos, setCompleteTodos] = useState(["ddddd", "eeeee"]);

  // event.target.valueで入力された値を取得できる
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    // incompleteTodos.push(todoText);
    const newTodos = [...incompleteTodos, todoText];
    // 未完了のtodoリストに新しいtodoを追加
    setIncompleteTodos(newTodos);
    // setTodoText("");を空にすることで、入力した後に入力欄を空にする
    setTodoText("");
  };

  const onClickDelete = (index) => {
    // alert(index+1 + '番目の要素を削除');
    const newTodos = [...incompleteTodos];
    // spliceは配列の要素を削除するメソッド
    // splice(削除する要素のindex, 削除する要素の数)
    newTodos.splice(index, 1);
    // 未完了のtodoリストから削除したtodoを削除(Sateを更新)
    setIncompleteTodos(newTodos);
  }

// 完了ボタンを押したときの処理
  const onClickComplete = (index) => {
    // alert(index+1 + '番目の要素を完了');
    const newIncompleteTodos = [...incompleteTodos];
    // spliceは配列の要素を削除するメソッド
    // splice(削除する要素のindex, 削除する要素の数)
    newIncompleteTodos.splice(index, 1);

    // 未完了のtodoリストから削除したtodoを削除(Sateを更新)
    setIncompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    // 完了のtodoリストに新しいtodoを追加
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <div className="app">
      <div className="header">
        <h1>TODOアプリ</h1>
        <div className="input-container">
          {/* inputの変更がかかった際にonChangeTodoTextを実行 */}
          <input type="text" placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
          <button onClick={onClickAdd}>追加</button>
        </div>
      </div>

      <div className="todo-container">
        <div className="todo-section">
          <h2 className="title">未完了のTODO</h2>
          <ul>
            {incompleteTodos.map((todo, index) => {
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
