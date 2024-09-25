const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li
          key={index}
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "lightgray" : "white",
          }}
        >
          {task.text}
          <button onClick={() => toggleTaskCompletion(index)}>
            {task.completed ? "Desmarcar" : "Completar"}
          </button>
          <button onClick={() => deleteTask(index)}>Borrar</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
