import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [currentTasks, setCurrentTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  function deleteTask(taskText) {
    const updatedTasks = currentTasks.filter(currentTask => {
      return currentTask.text !== taskText
    })
    setCurrentTasks(updatedTasks)
  }

  const filteredTasks = currentTasks.filter(task => {
    return category === "All" || task.category === category
  })

  function addTask (newTask){
    setCurrentTasks([...currentTasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        setCategory={setCategory}
      />
      <NewTaskForm categories={CATEGORIES} addTask={addTask}/>
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
