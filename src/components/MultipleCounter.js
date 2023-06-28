import { useState } from "react";
import { CounterGroup } from "./CounterGroup";
import { CounterSizeGenerator } from "./CounterSizeGenerator";

export function MultipleCounter() {
  const [size, setSize] = useState(0)

  return <>
    <CounterSizeGenerator size={size} onSizeChange={setSize}/>
    <CounterGroup size={size}/>
  </>
}
