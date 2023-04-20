import { useState } from "react";

function App() {
  const handleSend = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const [form, setForm] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setForm((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <div style={{ textAlign: "center", marginTop: "2em" }}>
      <h1>useStateでフォーム</h1>
      <form onSubmit={handleSend}>
        <div>
          <label>
            メールアドレス:
            <input name="email" type="email" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            パスワード：
            <input name="password" type="password" onChange={handleChange} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
