import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from './fetchUserEpic';
import { fetchPing } from './pingEpic';
function DuckExample() {
  // Declare a new state variable, which we'll call "count"
  const [ count, setCount ] = useState(0);
  const counter = useSelector((state) => state.users);
  const isPinging = useSelector((state) => state.pingReducer);
  const dispatch = useDispatch();
  console.log(counter);
  return (
    <div>
      <p>You clicked ::::: {JSON.stringify(counter)} times</p>
      <p>You pinged :::::: {JSON.stringify(isPinging)} times</p>
      <button onClick={(e) => dispatch(fetchUser('redux-observable'))}>Fetch user</button>
      <button onClick={(e) => dispatch(fetchPing())}>Fetch ping</button>
    </div>
  );
}
export default DuckExample;
