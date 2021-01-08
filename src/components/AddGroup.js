import React from 'react';

function AddGroup(props){
    const handleClick = (e) =>{
        props.addGroup();
    }
    return(
        <div onClick={handleClick} className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-xs my-2 w-1/4 mx-auto'>Add a group.</div>
        )
}

export default AddGroup;