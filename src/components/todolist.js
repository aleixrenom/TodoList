import React, { useState } from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';

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
				<Button color="secondary" size="small" onClick={() => deleteTodo(row.index)}>Delete</Button>
			)
		}
	]

	return (
		<div>
			<TextField 
				style={{marginRight: 10}} 
				label="Date" 
				type="date" 
				name="date"
				InputLabelProps={{shrink: true,}} 
				value={todo.date} 
				onChange={inputChanged} 
			/>
			<TextField style={{marginRight: 10}} label="Description" name="desc" value={todo.desc} onChange={inputChanged} />			
			<Tooltip title="Add ToDo">
					<IconButton variant="contained" color="primary" size="small" onClick={addTodo}>
						<AddCircleIcon />
					</IconButton>
				</Tooltip>
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