import {useContext} from 'react';
import CounterContext from '../context/CounterContext';

export default function D() {

  const counter = useContext(CounterContext);

  const addCounter = (e) => {
    const {value} = e.target;
    counter.setCount((prevCount) => prevCount + Number(value));
  }

  return(
    <div className="d">
      <strong>Component D</strong> <br/>
      <button onClick={addCounter} value={1}>+1</button>
    </div>
  )
}