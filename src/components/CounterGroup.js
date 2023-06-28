import {Counter} from "./Counter";

export function CounterGroup(props) {
  const list = Array.from(Array(props.size).keys()) || []
  return <>
    <p>Here are {props.size} counters</p>
    {list.map((key) => (
      <Counter key={key}/>
    ))}
  </>;
}

