import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Registration } from "./components/Registration";

function App() {
  return (
    <div className="App">
      <header className="App-header">{/* <Counter /> */}</header>
      <body className="App-body">
        <div className="reg-form-container">
          <Registration />
        </div>
      </body>
    </div>
  );
}

export default App;
