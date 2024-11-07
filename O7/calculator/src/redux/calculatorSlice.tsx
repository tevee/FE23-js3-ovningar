import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface calculatorState {
  nextValue: string;
  calculatedValue: number;
}

const initialState: calculatorState = {
  nextValue: '0',
  calculatedValue: 0,
}

// Helper function for applying operations
const applyOperation = (state: calculatorState, operation: (a:number, b:number) => number): void => {
  const valueToAdd = Number(state.nextValue);

  if(state.nextValue === '0') return;
  if(isNaN(valueToAdd)) state.calculatedValue = 0;
  else state.calculatedValue = operation(state.calculatedValue, valueToAdd);
  state.nextValue = '0';
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    updateNextValue: (state, action: PayloadAction<number>) => {
      if(state.nextValue === '0') state.nextValue = action.payload.toString();
      else state.nextValue += action.payload;
    },
    divide: (state) => {
      applyOperation(state, (a, b) => a / b)
    },
    multiply: (state) => {
      applyOperation(state, (a, b) => a * b)
    },
    subtract: (state) => {
      applyOperation(state, (a, b) => a - b)
    },
    add: (state) => {
      applyOperation(state, (a, b) => a + b)
    },
    clear: (state) => {
      state.calculatedValue = 0;
      state.nextValue = '0';
    }
  },

})

export const {updateNextValue, divide, multiply, subtract, add, clear} = calculatorSlice.actions; 

export const selectNextValue = (state: RootState) => state.calculator.nextValue;
export const selectCalculatedValue = (state: RootState) => state.calculator.calculatedValue;

export default calculatorSlice.reducer;