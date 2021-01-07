import React, { useState } from 'react';
import GroupBlock from './GroupBlock';

function AddGroup(props){
    const [classNum,setClassNum] = useState(props['classNumber'] ?? "Null")
    const [hasBeenClicked,setHasBeenClicked] = useState(props['beenClicked'] ?? false);
    const handleClick = (e) =>{
        setContent(<><GroupBlock classNumber={classNum}/><AddGroup classNumber={classNum}/></>)
    }
        const [content,setContent] = useState(<button onClick={handleClick} className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-xs my-2'>Add a group.</button>)
    return(
        <>{content}</>
        )
}

export default AddGroup;