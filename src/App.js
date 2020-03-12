import React from 'react';
import './App.css';
import Todolist from './components/Todolist';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  return (
    <div className="App">
		<AppBar position="static">
			<Toolbar>
			<IconButton edge="start" color="inherit" aria-label="menu">
				<MenuIcon />
			</IconButton>
			<Typography variant="h6">
				My Todos
			</Typography>
			{/* <Button color="inherit">Login</Button> */}
			</Toolbar>
    	</AppBar>
		<Todolist />
    </div>
  );
}

export default App;
