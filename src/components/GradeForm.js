import React, { useState } from 'react';
import GroupBlock from './GroupBlock';
import FinalBlock from './FinalBlock'
import AddGroup from './AddGroup';

function GradeForm(props){
    const [classNum,setClassNum] = useState(props["classNumber"] ?? "Null");
    return (
        <div className='grade-form'>
            <form>
                <div className='class1'>
                    <AddGroup classNumber={classNum}/>
                    <div className='finalGroup'>
                        <FinalBlock classNumber={classNum}/>
                    </div>
                </div>
            </form>
        </div>
    );
}


export default GradeForm;