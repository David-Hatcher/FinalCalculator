import React, { useState } from 'react';

function FinalBlock(props){
    const [classNum,setClassNum] = useState(props["classNumber"] ?? "Null");
    return(
        <div className={'final-group-' + classNum}>
        <div>
            <div className='groupLabel' style={{fontSize:'14px'}}>Final Weight:</div>
        </div>
        <div>
            <div className='finalWeight' style={{fontSize:'14px'}}>
                <input
                    className='final-weight-input border rounded-md text-black'
                    type='input'
                    name='final-weight'
                />
            </div>
        </div>
    </div>
    );
}

export default FinalBlock;