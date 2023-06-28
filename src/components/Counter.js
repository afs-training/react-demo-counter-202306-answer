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

  return <div className="counter">
    <button onClick={increase}>+</button>
    {count}
    <button onClick={decrease}>-</button>
  </div>;
}

