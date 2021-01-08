import React, { useState } from 'react';


function AddClass(props){
    const [runOnce,setRunOnce] = useState(false);

    const handleClick = (e) =>{
        props.addClass();
        setRunOnce(true);
    }

    return(
        <div className={'flex items-center justify-center border border-dashed ' + (!runOnce ? 'col-start-2 col-span-1' : '')}><button onClick={handleClick} className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>Click me to add a class!</button></div>
    )
}

export default AddClass;