import React from "react";
import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
} from "../../features/counter/counterSlice";

export default function Buttons() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Plus (+)</button>
      <button onClick={() => dispatch(decrement())}>Minus (-)</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
