import React, { useState } from 'react';
import TodoTable from './TodoTable';

// export default function Todolist() {
function Todolist() {
	const [todo, setTodo] = useState({desc: '', date: ''});
	const [todos, setTodos] = useState([]);

	const addTodo = () => {
		setTodos([{desc: todo.desc, date: todo.date}, ...todos]);
	}

	const inputChanged = (event) => {
		setTodo({...todo, [event.target.name]: event.target.value});
	}

	const deleteTodo = (row) => {
		setTodos(todos.filter( (_, index) => row !== index ));
	}

	return (
		<div>
			Date:&nbsp;<input type="date" name="date" value={todo.date} onChange={inputChanged} />
			&nbsp;Description:&nbsp;<input type="text" name="desc" value={todo.desc} onChange={inputChanged} />			
			&nbsp;<button onClick={addTodo}>Add</button>
			<TodoTable todos={todos} deleteTodo={deleteTodo} />
		</div>
	)
}

export default Todolist;