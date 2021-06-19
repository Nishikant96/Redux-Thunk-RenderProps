import "./styles.css";
import { useState } from "react";
import Hover from "./components/hover";
import Click from "./components/click";
import Counter from "./components/counter";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Counter
        render={(count, incrementCounter, resetCounter) => (
          <Hover
            handleIncrement={incrementCounter}
            handleReset={resetCounter}
            data={count}
          />
        )}
      />

      <Counter
        render={(count, incrementCounter, resetCounter) => (
          <Click
            handleIncrement={incrementCounter}
            handleReset={resetCounter}
            data={count}
          />
        )}
      />
    </div>
  );
}
