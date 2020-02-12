import React, { useState, useLayoutEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { store, fetchUser } from './store';
import { useSelector } from 'react-redux';
import Header from './Header';
import DuckExample from './ducks/DuckExample';
const source = [ 'Adam', 'Brian', 'Christine' ];

function App() {
  const [ names, setNames ] = useState(source);
  useLayoutEffect(
    () => {
      console.log('lyout effect');
      store.subscribe((data) => {
        console.log('received ----' + data);
        return setNames([ 'HHHH' ]);
      });
    },
    [ 'Hello' ]
  );
  const counter = useSelector((state) => state.users.names);
  console.log(counter);

  return (
    <div className='App'>
      <h1>RxJS with React</h1>
      <button onClick={(e) => store.dispatch(fetchUser('redux-observable'))}>Delete Row</button>
      <Header />
      <DuckExample />
      <div>{names} </div>
      <div>{'==========================================='} </div>
      <div>{JSON.stringify(counter)} </div>
    </div>
  );
}
export default App;
