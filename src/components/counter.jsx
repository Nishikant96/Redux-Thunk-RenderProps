import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((values) => values + 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return <>{props.render(count, handleIncrement, handleReset)}</>;
}
