import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

function Task({ id, text, completed, completeTask, deleteTasks }) {
  return (
    <div className={completed ? "Task-container complete" : "Task-container"}>
      <div className="task-text">{text}</div>

      <div className="Icon-complete" onClick={() => completeTask(id)}>

        <AiOutlineCheckCircle />
      </div>
      <div className="Icon-delete" onClick={() => deleteTasks(id)}>
        <AiOutlineCloseCircle />
      </div>
    </div>
  );
}
export default Task;
