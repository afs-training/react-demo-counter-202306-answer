import {useState} from "react";
import './Counter.css';
export function Counter(props) {

  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1)
  }
  const decrease = () => {
    setCount(count - 1)
  }

  // responding-to-events
  // https://react.dev/learn/responding-to-events
  return <div className="counter">
    <button onClick={increase}>+</button>
    <span className="count">{count}</span>
    <button onClick={decrease}>-</button>
  </div>;
}

