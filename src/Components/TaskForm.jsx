function TaskForm ({addTask, setTask, task}) {
    return (
        <form className='Task-Form' onSubmit = {addTask}>
            <input
            className='Task-input' onChange={(e)=> setTask (e.target.value)}
            value={task}
            type='text'
            placeholder='write a task'
            name='text'
            />
            <button className='Task-button' type="submit">
            Add Task
            </button>
        </form>
    )
}

export default TaskForm;