import React from 'react';

function ClassName(){
    return(
        <div className='className'>
            <label htmlFor='class-name' style={{fontSize:'14px'}}>Class Name:</label><br/>
            <input
                className='form-control border rounded-md text-black input-class-name'
                type='input'
                name='input-class-name'/>
            <br/>
        </div>
    )
}


export default ClassName;