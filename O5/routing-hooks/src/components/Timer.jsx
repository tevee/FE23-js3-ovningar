import useMyTimer from "./useMyTimer.jsx";
import dateFormat from 'dateformat';

export default function Timer() {
  
  const [timer] = useMyTimer();

  return(
    <>
      <h2>Timer</h2>
      <h3>Current time: {dateFormat(timer, 'isoTime')}</h3>
    </>
  )
}