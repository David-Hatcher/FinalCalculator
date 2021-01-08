import React, { useState } from 'react';
import Header from './components/Header';
import GradeBlock from './components/GradeBlock';
import AddClass from './components/AddClass';
import './App.css';

function App() {
	const [classes,setClasses] = useState({});
	const [classCount,setClassCount] = useState(1);

	const addAClass = () =>{
		let reWriteClasses = classes;
		reWriteClasses[parseInt(classCount)] = {};
		setClassCount(classCount + 1);
		setClasses(reWriteClasses);
		console.log(classCount);
		console.log(classes)
	}
	return (
		<div className="App">
			<header className="App-header">
				<Header />
			</header>
			<div className='body grid md:grid-cols-3 h-3/6'>
				{Object.keys(classes).map(([key,value]) => <GradeBlock key={key} classNumber={key}/>)}
				<AddClass classNumber={classCount} beenClicked={true} addClass={addAClass}/>
			</div>
		</div>
	);
}

export default App;
