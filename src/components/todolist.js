import React, { useState } from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

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

	const columns = [
		{
			Header: 'Description',
			accessor: 'desc'
		},
		{
			Header: 'Date',
			accessor: 'date'
		},
		{
			Cell: row => (
				<button onClick={() => deleteTodo(row.index)}>Delete</button>
			)
		}
	]

	return (
		<div>
			Date:&nbsp;<input type="date" name="date" value={todo.date} onChange={inputChanged} />
			&nbsp;Description:&nbsp;<input type="text" name="desc" value={todo.desc} onChange={inputChanged} />			
			&nbsp;<button onClick={addTodo}>Add</button>
			<ReactTable 
				data={todos} 
				columns={columns} 
				defaultPageSize={10}
				filterable={true}
			/>
		</div>
	)
}

export default Todolist;