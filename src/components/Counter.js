import './Counter.css';
export function Counter(props) {

  function increase() {
    props?.onChange(props.count + 1)
  }
  const decrease = () => {
    props?.onChange(props.count - 1)
  }

  return <div className="counter">
    <button onClick={increase}>+</button>
    <span className="count">{props.count}</span>
    <button onClick={decrease}>-</button>
  </div>;
}

