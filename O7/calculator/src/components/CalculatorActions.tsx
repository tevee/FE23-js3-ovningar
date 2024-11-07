import { useAppDispatch } from "../app/hooks";
import { divide, multiply, subtract, add, clear } from "../redux/calculatorSlice";

const calcActions: string[] = ['/', '*', '-', '+', 'C'];

export default function CalculatorActions():JSX.Element {

  const dispatch = useAppDispatch();

  const executeAction = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const {value} = e.currentTarget;
    
    switch(value) {
      case '/':
        dispatch(divide());
        break;
      case '*':
        dispatch(multiply());
        break;
      case '-':
        dispatch(subtract());
        break;
      case '+':
        dispatch(add());
        break;
      case 'C':
        dispatch(clear());
        break;
      default:
        throw Error(`${value} is not a valid case`)
    }
    
  } 

  return(
    <div className="calculator-actions">
      <ul>
        {
          calcActions.map((calcAction, i) => (
            <li key={i}><button onClick={executeAction} value={calcAction} className="calculator-input">{calcAction}</button></li>
          ))
        }
      </ul>
    </div>
  )
}