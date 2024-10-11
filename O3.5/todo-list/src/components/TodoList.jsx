import Task from '../components/Task.jsx'

export default function TodoList({tasks, editFormData, toggleEditBtn, handleEditedInput, handleSave, handleAreTasksDone, areTasksDone, sortBy, sortByValue, removeTask}) {

  const tasksToRender = areTasksDone 
    ? tasks.filter(task => task.status === 'done')
    : tasks;

  return(
    <div className="todo-list">
      <h2>Todo-list</h2>
      <div className="todo-list-header">
        <label htmlFor="checkbox">Show only finished tasks</label>
        <input type="checkbox" id="checkbox" value={areTasksDone} onChange={handleAreTasksDone}/>
      </div>
      <div className="todo-list-header">
        <label htmlFor="status">Sort by:</label>
        <select id="status" name="sort-tasks" value={sortByValue} onChange={(e) => sortBy(e.target.value)}>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      
      <form>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Task</th>
              <th scope="col">Status</th>
              <th scope="col">Date</th>
              <th scope="col">Edit</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {tasksToRender.map((task) => 
              <Task 
                key={task.id} 
                task={task} 
                editFormData={editFormData[task.id]}
                handleEditedInput={handleEditedInput}
                toggleEditBtn={toggleEditBtn}
                handleSave={handleSave}
                removeTask={removeTask}
              />)
            }
          </tbody>
        </table>
      </form>
    </div>
  )
}