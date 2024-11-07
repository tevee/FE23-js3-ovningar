import CalculatorActions from "./CalculatorActions";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorNumbers from "./CalculatorNumbers";
import { selectCalculatedValue } from "../redux/calculatorSlice";
import { useAppSelector } from "../app/hooks";

export default function Calculator():JSX.Element {
  
  const calculatedValue = useAppSelector(selectCalculatedValue);
  
  return(
    <div className="calculator">
      <h2>{calculatedValue}</h2>
      <div className="calcBody">
        <CalculatorDisplay/>
        <CalculatorNumbers/>
        <CalculatorActions/>
      </div>
    </div>
  )
}