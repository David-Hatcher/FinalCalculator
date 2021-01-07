import React, { useState } from 'react';
import ClassName from './ClassName';
import GradeForm from './GradeForm';
import GradeCalculator from './GradeCalculator';
import StoreData from './StoreData';

function GradeBlock(props){

    const [classNum,setClassNum] = useState(props["classNumber"] ?? "Null");
    window.data[classNum] = {}
    return(
        <div className={'grade-block class-' + classNum + ' my-2'}>
            <h2>Class {classNum}</h2>
            <ClassName classNumber={classNum}/>
            <GradeForm classNumber={classNum}/>
            <div className='grid grid-cols-3 flex items-end justify-center'>
                {/*<StoreData classNumber={classNum}/>*/}
                <GradeCalculator classNumber={classNum}/>
            </div>
        </div>
    )
}

export default GradeBlock;