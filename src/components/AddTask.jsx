import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;
    addTask(newTask);
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddTask;
