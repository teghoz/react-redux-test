import React from 'react';
import ReactDOM from "react-dom"
import {useSelector, useDispatch} from "react-redux"
import {increment, decrement} from "./Actions"

function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hey!!!! </h1>
      <h2>Our Current Count = {state.counter}</h2>
      <h3>Our current loggedIn State = {state.isLogged.toString()}</h3>
      <button type="button" onClick={() => {dispatch(increment(0))}}>Increment</button>
      <button type="button" onClick={() => {dispatch(decrement(0))}}>Decrement</button>
    </div>
  );
}

export default App;
