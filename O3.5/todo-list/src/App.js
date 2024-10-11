import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useReducer} from 'react';
import TaskForm from './components/TaskForm.jsx';
import TodoList from './components/TodoList.jsx';

function reducer(state, action) { 
  switch(action.type) {
    case 'updateFormData':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.target.id]: action.target.value,
          id: (state.tasks.length > 0 ? Math.max(...state.tasks.map(task => task.id)) : 0) + 1,
          date: new Date().toDateString(),
          errorMsg: state.formData.errorMsg && ''
        }
      }
      case 'addTask':
      if(validateSubmit(state.formData)) {
        return {
          ...state,
          formData: initialState.formData,
          tasks: [...state.tasks, state.formData],
          editFormData: {
            ...state.editFormData,
            [state.formData.id]: {
              ...state.formData,
              title: '',
              task: ''
            }
          }
        }
      } else {
        return {
          ...state,
          formData: {
            ...state.formData,
            errorMsg: `Don't forget to add title!`
          }
        }
      }
    case 'toggleEditBtn':
      const updatedTasks = state.tasks.map((task) => task.id === action.payload
        ? {...task, isEditing: !task.isEditing}
        : task);
      
      return {
        ...state,
        tasks: updatedTasks,
        editFormData: {
          ...state.editFormData,
          [action.payload]: {...state.editFormData[action.payload], isEditing: !state.editFormData[action.payload].isEditing}
        }
      }
    case 'updateEditedFormData':
      return {
        ...state,
        editFormData: {
          ...state.editFormData,
          [action.payload.id]: {...state.editFormData[action.payload.id], [action.payload.field]: action.payload.value}
        }
      }
    case 'saveEditedData':
      const savedEditedTasks = state.tasks.map((task) => task.id === action.payload
        ? {...state.editFormData[task.id], isEditing: false}
        : task);

      return {
        ...state,
        tasks: savedEditedTasks,
        editFormData: {
          ...state.editFormData,
          [action.payload]: {
            ...state.editFormData[action.payload],
              title: '',
              task: '',
              isEditing: false
          }
        }
      }
    case 'areTasksDone':
      return {
        ...state,
        areTasksDone: action.payload
      }
    case 'sortBy':
      const sortedTasks = [...state.tasks].sort((a, b) => {
        return action.payload.value === 'ascending' ? a.id - b.id : b.id - a.id
      })
      
      return {
        ...state,
        tasks: sortedTasks,
        sortBy: action.payload.value
      }
    case 'removeTask':
      const newTasks = state.tasks.filter(task => task.id !== action.payload);
      const {[action.payload]: removed, ...updatedEditFormData} = state.editFormData;

      return {
        ...state,
        tasks: newTasks,
        editFormData: updatedEditFormData
      }
    default:
      throw Error('Invalid action');
  }
}

const validateSubmit = (formData) => {
  if(formData.title !== '') return true;
  return false;
}

const initialState = {
  formData: {
    title: '',
    task: '',
    date: new Date().toDateString(),
    status: 'todo',
    id: 0,
    errorMsg: '',
    isEditing: false
    },
  tasks: [],
  editFormData: {},
  areTasksDone: false,
  sortBy: 'ascending'
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  
  const updateFormData = (e) => {
    dispatch({type: 'updateFormData', target: e.target});
  }

  const addTask = (e) => {
    e.preventDefault();
    dispatch({type: 'addTask'})
  }
  
  const toggleEditBtn = (e, taskId) => {
    e.preventDefault();
    dispatch({type: 'toggleEditBtn', payload: taskId})
  }

  const handleEditedInput = (taskId, field, value) => {
    dispatch({type: 'updateEditedFormData', payload: {id: taskId, field, value}})
  }

  const handleSave = (e, taskId) => {
    e.preventDefault();
    dispatch({type: 'saveEditedData', payload: taskId});
  }

  const handleAreTasksDone = (e) => {
    dispatch({type: 'areTasksDone', payload: e.target.checked})
  }

  const sortBy = (sorting) => {
    dispatch({type: 'sortBy', payload: {value: sorting}})
  }

  const removeTask = (e, taskId) => {
    e.preventDefault();
    dispatch({type: 'removeTask', payload: taskId})
  }

  return (
    <div className="App">
      <TaskForm 
        updateFormData={updateFormData}
        formData={state.formData}
        addTask={addTask}
      />
      <TodoList
        tasks={state.tasks}
        editFormData={state.editFormData}
        toggleEditBtn={toggleEditBtn}
        handleEditedInput={handleEditedInput}
        handleSave={handleSave}
        handleAreTasksDone={handleAreTasksDone}
        areTasksDone={state.areTasksDone}
        sortBy={sortBy}
        sortByValue={state.sortBy}
        removeTask={removeTask}
      />
    </div>
  );
}

export default App;
