import React, { createElement } from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends React.Component {
	state = {
		task: null,
		items:[]
	}
	remove = (e) => {
		e.target.parentNode.remove();
	}
	tasks = (e) => {
		this.setState({
			task: e.target.value
		})
		console.log(this.state);
	}
	submit = (e) => {
		e.preventDefault();
		let container = (<div className="container">
			<p>{this.state.task}</p>
			<div id="exit" className="exit" onClick={this.remove}></div>
			</div>);
			this.setState({
				items:this.state.items.concat(container)
			})
		// try {
		// 	document.getElementById('task').appendChild(paragraph);
		// } catch (error) {
		// 	console.log('nothing inserted')	;
		// }
	}
	render() {
		return (
			<div className='App'>
				<div id='task' className="task">{this.state.items}</div>
				<form action="" autoComplete='off'>
					<label htmlFor="textbox" className='label'>your task: </label>
					<input onChange={this.tasks} type="text" name='textbox' placeholder='type here ...' className='taskInput' />
					<br />
					<input onClick={this.submit} type="submit" value="Submit" className="submit" />
				</form>
			</div>
		)
	}
}

export default App;
