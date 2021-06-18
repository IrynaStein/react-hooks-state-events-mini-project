import React from "react";
import Task from "./Task"

function TaskList({tasks, deleteTask}) {

  const renderTasks = () => {
return tasks.map(task => <Task deleteTask={deleteTask} key={task.text} task={task} />)
  }
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {renderTasks()}
    </div>
  );
}

export default TaskList;
