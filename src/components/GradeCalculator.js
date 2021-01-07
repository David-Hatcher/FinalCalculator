import React, { useState } from 'react'

function GradeCalculator(props){

    const [classNum,setClassNum] = useState(props["classNumber"] ?? "Null");
    const [msg,setMsg] = useState('Final score needed for following grades');
    const [content, setContent] = useState('Uncalculated');


    const renderContent = (e) => {
        let gradeLetters = {
            A : [90,100],
            B : [80,99.99],
            C : [70,79.99],
            D : [60,69.99],
            F : [0,59.99]
        }
        let grades = document.querySelectorAll(".class-" + classNum + ' .group-grade-input');
        let gradeWeights = document.querySelectorAll(".class-" + classNum + ' .group-weight-input');
        let finalWeight = document.querySelector(".class-" + classNum + ' .final-weight-input').value < 1 ? document.querySelector(".class-" + classNum + ' .final-weight-input').value : document.querySelector(".class-" + classNum + ' .final-weight-input').value / 100;
        let grade = 0;
        for (let i = 0; i < grades.length; i++) {
            let groupGrade = grades[i].value;
            let groupWeight = gradeWeights[i].value < 1 ? gradeWeights[i].value : gradeWeights[i].value / 100;
            grade += groupGrade * groupWeight;
        }
        let scoresNeeded = {};
        for(const [key,value] of Object.entries(gradeLetters)){
            let scoreNeeded = Math.round((value[0] - grade)/finalWeight * 100) / 100;
            scoresNeeded[key] = scoreNeeded;
        }
        return (
            <ul>
                {Object.keys(scoresNeeded).map(key => (
                    <li><b>{key}</b> {scoresNeeded[key]}</li>
                ))}
            </ul>
        )
    }

    const handleClick = (e) => {
        setContent(renderContent());
    }

    return (
        <div className='col-start-2'>
            <h2 style={{fontSize:'20px'}}>Click the button to calculate grade</h2>

            <p style={{fontSize:'16px'}}>{msg}</p>

            <div style={{fontSize:'16px'}}>{content}</div>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleClick}>
            Click here to Calculate Grade
            </button>
        </div>
    )
}

export default GradeCalculator;