import React, { useState } from 'react';
import GroupBlock from './GroupBlock';
import FinalBlock from './FinalBlock'
import AddGroup from './AddGroup';

function GradeForm(props){
    const [classNum] = useState(props.classNumber ?? "Null");
    const [groupCount,setGroupCount] = useState(0);
    const [groups,setGroups] = useState({});

    const addGroup = (e) =>{
        setGroupCount(groupCount + 1);
        let reWriteGroups = groups;
        reWriteGroups[parseInt(groupCount) + 1] = {}
        setGroups(reWriteGroups);
        console.log(groups)
    }
    return (
        <div className='grade-form'>
            <form>
                <div className='class1 content-center'>
                    {Object.keys(groups).map(([key,value]) => <GroupBlock classNumber={classNum} key={key} groupNum={key}/>)}
                    <AddGroup classNumber={classNum} addGroup={addGroup}/>
                    <div className='finalGroup'>
                        <FinalBlock classNumber={classNum}/>
                    </div>
                </div>
            </form>
        </div>
    );
}


export default GradeForm;