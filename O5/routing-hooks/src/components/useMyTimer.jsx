import {useState, useEffect, useDebugValue} from 'react';

export default function useMyTimer() {
  const [counter, setCounter] = useState(new Date());
  useDebugValue(counter)

  useEffect(() => {
    let interval = setInterval(() => {
      setCounter(new Date());
    }, 1000)

    return() => {
      clearInterval(interval)
    }
  }, [])
  
  return [counter];
}