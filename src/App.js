import React, { useState } from 'react';
import Header from './components/Header';
import GradeBlock from './components/GradeBlock';
import AddClass from './components/AddClass';
import './App.css';

function App() {
	window.data = {};
	return (
		<div className="App">
			<header className="App-header">
				<Header />
			</header>
			<div className='body grid md:grid-cols-3 h-3/6'>
				<AddClass classNumber={1} beenClicked={true}/>
			</div>
		</div>
	);
}

export default App;
