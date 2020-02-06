import React from 'react';

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
						<td><button onClick={() => props.deleteTodo(index)}>Delete</button></td>
					</tr>
				)
			}
			</tbody>
			</table>
		</div>
	)
}