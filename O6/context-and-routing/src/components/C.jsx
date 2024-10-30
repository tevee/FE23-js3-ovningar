import {useContext} from 'react';
import CounterContext from '../context/CounterContext';

export default function C() {

  const counter = useContext(CounterContext);

  return(
    <div className="c">
      <strong>Component C</strong> <br/>
      Counter: {counter.count}
    </div>
  )
}