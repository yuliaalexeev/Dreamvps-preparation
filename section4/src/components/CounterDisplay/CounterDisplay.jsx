import React from "react";
import { useSelector } from "react-redux";

export default function CounterDisplay() {
  // useSelector HOOK read data from the store
  const count = useSelector((state) => state.counter.value);

  return <div>{count}</div>;
}
