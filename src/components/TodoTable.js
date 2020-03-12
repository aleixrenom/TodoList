import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function TodoTable(props) {
	return(
		<div>
			<table>
			<thead>
				<th>Date</th><th>Description</th>
			</thead>
			<tbody>
			{
				props.todos.map(
				(todo, index) => 
					<tr key={index}>
						<td>{todo.date}</td>
						<td>{todo.desc}</td>
						<td><Button color="secondary" size="small" onClick={() => props.deleteTodo(index)}>Delete</Button></td>
					</tr>
				)
			}
			</tbody>
			</table>
		</div>
	)
}