import React, { useState } from "react";

function NewTaskForm({ categories, addTask }) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")

  function renderCategory() {
    return categories.map((category) => {
      return (
        <option key={category}>{category}</option>
      )
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    addTask({text: text, 
      category: category})
    setText("")
    setCategory("Code")
    console.log({text, category})
  }

  function handleChange(e) {
    setText(e.target.value)
  }
  console.log(text)

  function categoryChange(e){
    setCategory(e.target.value)
  }
  console.log(category)

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={text} />
      </label>
      <label>
        Category
        <select
          name="category"
          onChange={categoryChange}
          value={category}>
          {/* render <option> elements for each category here */}
          {renderCategory()}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
