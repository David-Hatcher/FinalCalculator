import React, { useState } from 'react';
import GradeBlock from './GradeBlock';


function AddClass(props){

    const [classNum,setClassNum] = useState(props['classNumber'] ?? "Null")
    const [hasBeenClicked,setHasBeenClicked] = useState(props['beenClicked'] ?? false);

    const handleClick = (e) =>{
        setContent(<><div className={'border border-dashed justify-self-center'}><GradeBlock classNumber={classNum}/></div><AddClass classNumber={classNum + 1}/></>)
    }

    const [content,setContent] = useState(<div className={'flex items-center justify-center border border-dashed ' + (hasBeenClicked ? 'col-start-2 col-span-1' : '')}><button onClick={handleClick} className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>Click me to add a class!</button></div>)

    return(
        <>{content}</>
    )
}

export default AddClass;