import "./App.css";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");
  const [exp, setexp] = useState([]);

  const addExpense = () => {
    if (!input || !amount) return;

    const newExp = {
      id: exp.length + 1,
      title: input,
      amount: amount,
    };
    setexp([...exp, newExp]);
    setInput("");
    setAmount("");
  };

  const  HandleDelete = (id) => {
     setexp(exp.filter((exp) => exp.id !== id))
  }

  return (
    <div className="conatainer">
      <h1 className="title">Expense Tracker</h1>
      <div className="input">
        <div className="give">
        <input
          id="inp1"
          type="text"
          placeholder="Expense"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          id="inp2"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        </div>
        <button className="button-27" onClick={addExpense}>Add Expense</button>
      </div>
      <ol className="list">
        {exp.map((exps) => (
          <li key={exps.id}>
            <span> {exps.title}</span>
            <span id="rupee">&#8377;{exps.amount}</span>
            <button className="del" onClick={() => HandleDelete(exps.id) }>Delete</button>
          </li>
          
        ))}
      
      </ol>
    </div>
  );
}

export default App;
