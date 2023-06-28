import {useMemo, useState} from "react";
import { CounterGroup } from "./CounterGroup";
import { CounterSizeGenerator } from "./CounterSizeGenerator";
import { CounterGroupSum } from "./CounterGroupSum";

export function MultipleCounter() {
  const [counterList, setCounterList] = useState([])

  const handleSizeChange = (size) => {
    const list = size ? Array(size).fill(0) : [];
    setCounterList(list)
  }

  // https://react.dev/reference/react/useMemo
  const sum = useMemo(() => {
    return counterList.reduce((sum, number) => sum + number, 0);
  }, [counterList]);

  return <>
    <CounterSizeGenerator size={counterList.length} onSizeChange={handleSizeChange}/>
    <CounterGroupSum sum={sum} />
    <CounterGroup counterList={counterList} onChange={setCounterList}/>
  </>
}
