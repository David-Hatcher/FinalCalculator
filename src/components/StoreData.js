import React, { useState } from 'react';


function StoreData(props){
    const [classNum,setClassNum] = useState(props['classNumber'] ?? 'Null');
    const handleClick = (e) =>{
        let className = document.querySelector('.class-' + {classNum} + ' .input-class-name').value;
        let groupTitles = Array.from(document.querySelectorAll('.class-'+ {classNum} +' .groupInput input')).map(element => element.value);
    }
    return (
        <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow max-h-16' onClick={handleClick}>Store Data for class {classNum}!</button>
    )
}

export default StoreData;