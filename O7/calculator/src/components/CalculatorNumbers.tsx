import { useAppDispatch } from "../app/hooks";
import { updateNextValue } from "../redux/calculatorSlice";

const calcNumbers: number[] = [7,8,9,4,5,6,1,2,3,0];

export default function CalculatorNumbers():JSX.Element {

  const dispatch = useAppDispatch();

  const updateInput = (e: React.MouseEvent<HTMLButtonElement>):void => {
    e.preventDefault();
    dispatch(updateNextValue(Number(e.currentTarget.value)));
  }

  return(
    <div className="calculator-numbers">
        {
          calcNumbers.map((calcNumber, i) => (
            <button key={i} onClick={updateInput} value={calcNumber} className={`calculator-input ${i === calcNumbers.length - 1 && 'last-num-item'}`}>{calcNumber}</button>
          ))
        }
    </div>
  )
}