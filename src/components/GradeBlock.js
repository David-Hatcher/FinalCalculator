import React, { useState } from 'react';
import ClassName from './ClassName';
import GradeForm from './GradeForm';
import GradeCalculator from './GradeCalculator';
import StoreData from './StoreData';

function GradeBlock(props){

    const [classNum] = useState(props.classNumber ?? "Null");
    console.log(props.class);
    return(
        <div className={`grade-block class-${classNum} my-2  border border-dashed`}>
            <h2>Class {classNum}</h2>
            <ClassName classNumber={classNum} class={props.class}/>
            <GradeForm classNumber={classNum} class={props.class}/>
            <div className='grid grid-cols-3 flex items-end justify-center'>
                <StoreData classNumber={classNum}/>
                <GradeCalculator classNumber={classNum}/>
            </div>
        </div>
    )
}

export default GradeBlock;