import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { InputTodo } from './components/InputTodo'
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  // 【State】入力された値を管理するState
  const [todoText, setTodoText] = useState("");
  // 【State】未完了のtodoリストを管理するState
  const [incompleteTodos, setIncompleteTodos] = useState([
    "たまごを買う",
    "小松菜を買う",
    "牛乳を買う",
    "Netflixを見る",
  ]);
  // 【State】完了のtodoリストを管理するState
  const [completeTodos, setCompleteTodos] = useState([
    "部屋の掃除をする",
    "キッチン周りを掃除する",
  ]);

  // event.target.valueで入力された値を取得できる
  // 【関数】入力欄に入力された値を取得する処理
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 【関数】追加ボタンを押したときの処理
  const onClickAdd = () => {
    if (todoText === "") return;
    // incompleteTodos.push(todoText);
    const newTodos = [...incompleteTodos, todoText];
    // 未完了のtodoリストに新しいtodoを追加
    setIncompleteTodos(newTodos);
    // setTodoText("");を空にすることで、入力した後に入力欄を空にする
    setTodoText("");
  };

  // 【関数】削除ボタンを押したときの処理
  const onClickDelete = (index) => {
    // alert(index+1 + '番目の要素を削除');
    const newTodos = [...incompleteTodos];
    // spliceは配列の要素を削除するメソッド
    // splice(削除する要素のindex, 削除する要素の数)
    newTodos.splice(index, 1);
    // 未完了のtodoリストから削除したtodoを削除(Sateを更新)
    setIncompleteTodos(newTodos);
  };

  // 【関数】完了ボタンを押したときの処理
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

  // 【関数】戻すボタンを押したときの処理
  const onClickBack = (index) => {
    // alert(index+1 + '番目の要素を戻す');
    const newCompleteTodos = [...completeTodos];
    // spliceは配列の要素を削除するメソッド
    // splice(削除する要素のindex, 削除する要素の数)
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    // 未完了のtodoリストに新しいtodoを追加
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <div className="app">
      <div className="header">
        <h1>TODOアプリ</h1>

        <InputTodo
          todoText={todoText}
          onChange={onChangeTodoText}
          onClick={onClickAdd}
        />
      </div>

      <div className="todo-container">
        <IncompleteTodos
          todos={incompleteTodos}
          onClickComplete={onClickComplete}
          onClickDelete={onClickDelete}
        />

        <br></br>

        <CompleteTodos
          completeTodos={completeTodos}
          onClickBack={onClickBack}
        />

      </div>
    </div>
  );
};
