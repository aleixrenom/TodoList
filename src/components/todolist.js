import React, { useState } from 'react';

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

			<table>
			<thead>
				<th>Date</th><th>Description</th>
			</thead>
			<tbody>
			{
				todos.map(
				(todo, index) => 
					<tr key={index}>
						<td>{todo.date}</td>
						<td>{todo.desc}</td>
						<td><button onClick={() => deleteTodo(index)}>Delete</button></td>
					</tr>
				)
			}
			</tbody>
			</table>
		</div>
	)
}

export default Todolist;