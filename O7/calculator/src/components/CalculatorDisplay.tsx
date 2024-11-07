import { selectNextValue } from "../redux/calculatorSlice"
import { useAppSelector } from "../app/hooks"

export default function CalculatorDisplay():JSX.Element {

  const inputValue:string = useAppSelector(selectNextValue)

  return(
    <div className="calcuator-display">
      <h2>{inputValue}</h2>
    </div>
  )
}