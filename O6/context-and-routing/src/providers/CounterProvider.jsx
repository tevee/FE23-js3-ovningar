import {useState} from 'react';
import CounterContext from '../context/CounterContext';

const CounterProvider = ({children}) => {
  
  const [count, setCount] = useState(0);
  
  const providerValues = {
    count: count,
    setCount: setCount
  };
  
  return(
    <CounterContext.Provider value={providerValues}>
      <div className="a">
        <strong>Component A</strong>
        {children}
      </div>
    </CounterContext.Provider>
  )
}

export default CounterProvider;