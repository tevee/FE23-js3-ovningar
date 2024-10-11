export default function TaskForm({updateFormData, formData, addTask}) {

  return(
    <div className="form-wrapper">
      <form className="form">
        <label htmlFor='title'>Title</label>
        {formData.errorMsg && <span className="text-danger">{formData.errorMsg}</span>}
        <input id="title" type="text" value={formData.title} onChange={updateFormData}/>
        <label htmlFor='task'>Task</label>
        <textarea id="task" type="text" rows={5} cols={40} value={formData.task} onChange={updateFormData}></textarea>
        <button onClick={addTask}>Add task</button>
      </form>
    </div>
  )
}