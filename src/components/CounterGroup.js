import {Counter} from "./Counter";

export function CounterGroup({ counterList, onChange }) {

  function handleChange(index, value) {
    const newCounterList = [...counterList]
    newCounterList[index] = value
    onChange(newCounterList)
  }

  return <>
    <p>Here are {counterList.length} counters</p>
    {
      counterList.map((count, index) => <Counter
        key={index}
        count={count}
        onChange={(value) => handleChange(index, value)}
      ></Counter>)
    }
  </>
}

