export default function EditForm({task, handleEditedInput, handleSave}) {
  return(
    <>
    <tr>
      <td>
        <label htmlFor='title'>Title</label>
        <input id="title" type="text" value={task.title} onChange={(e) => handleEditedInput(task.id, 'title', e.target.value)}/>
      </td>
    </tr>
    <tr>
      <td>
        <label htmlFor='task'>Task</label>
        <textarea id="task" type="text" cols={40} value={task.task} onChange={(e) => handleEditedInput(task.id, 'task', e.target.value)}></textarea>
      </td>
    </tr>
    <tr>
      <td>
        <label htmlFor="status">Status:</label>
        <select id="status" name="status" value={task.status} onChange={(e) => handleEditedInput(task.id, 'status', e.target.value)}>
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </td>
    </tr>
    <tr>
      <td colSpan="7">
        <button className="btn btn-primary" onClick={(e) => handleSave(e, task.id)}>Update edit</button>
      </td>
    </tr>
    </>
  )
}