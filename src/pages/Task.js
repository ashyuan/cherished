import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';
import taskSenior from "../pics/senior.jpg"

const Task = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const taskRef = useNav('Task');

	return (
		<section ref={taskRef} id='taskContainer'>
			<img
				src={taskSenior} className="taskSeniorIcon"
				alt='4 seniors dancing'
			/>
			<div className="todoList">
				<h3><i class="fas fa-tasks"></i> What are my tasks today? </h3>
				<p>Type in your task, then press "Enter/Return" on your keyboard.</p>
				<TodoList />
			</div>
		</section>
	);
};

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(index)}>Done</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
		placeholder="Task"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function TodoList() {
  const [todos, setTodos] = React.useState([
    {
      text: "Brush your teeth",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="TodoList">
      <div className="todo-container">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}


export default Task;
