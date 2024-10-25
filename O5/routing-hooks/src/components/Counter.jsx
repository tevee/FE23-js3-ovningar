import {useReducer} from 'react';

const buttonValues = [
  -9, -8, -7, -6, -5, -4, -3, -2, -1,
  1, 2, 3, 4, 5, 6, 7, 8, 9
]

export default function Counter() {
  const [counter, dispatch] = useReducer(counterReducer, 0);

  const onClick = (e) => {
    const {value} = e.target;
    dispatch({type: 'add', value: Number(value)})
  }

  return(
    <>
      <h2>Counter</h2>
      <h3>Current count: {counter}</h3>
      {buttonValues.map(value => (
        <button key={value} value={value} onClick={onClick}>{value}</button>
      ))}
    </>
  )
}

function counterReducer(state, payload) {
  switch(payload.type) {
    case 'add':
      return state + payload.value;
    default:
      throw Error('Incorrect payload')
  }
}