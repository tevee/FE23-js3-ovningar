import EditForm from './EditForm.jsx'


export default function Task({task, editFormData, handleEditedInput, toggleEditBtn, handleSave, removeTask}) {

  let taskStatus;
  if(task.status === 'todo') taskStatus = 'text-danger'
  else if(task.status === 'in-progress') taskStatus = 'text-primary'
  else taskStatus = 'text-success'

  return(
    <>
      <tr>
        <th scope="row">{task.id}</th>
        <td>{task.title}</td>
        <td>{task.task}</td>
        <td className={taskStatus}>{task.status}</td>
        <td>{task.date}</td>
        <td><button className="btn btn-primary" onClick={(e) => toggleEditBtn(e, task.id)}>{task.isEditing ? 'Stop Editing' : 'Edit'}</button></td>
        <td><button className="btn btn-danger" onClick={(e) => removeTask(e, task.id)}>Remove</button></td>
      </tr>
      {task.isEditing && <EditForm task={editFormData} handleEditedInput={handleEditedInput} handleSave={handleSave}/>}
    </>
    )
}