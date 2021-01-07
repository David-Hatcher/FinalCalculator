import React, { useState } from 'react';


function GroupBlock(props){
    const [classNum,setClassNum] = useState(props["classNumber"] ?? "Null");
    const [name,setName] = useState('');
    const [grade,setGrade] = useState('');
    const [weight, setWeight] = useState('');
    return (
        <div className={'grid grid-cols-3 space-x-1 group-' + classNum}>
            <div>
                <div className='groupLabel' style={{fontSize:'14px'}}>Label: </div>
                <div className='groupInput' style={{fontSize:'14px'}}>
                    <input
                        className='group-name-input border border-gray p-0.5 rounded-md w-4/5 md:w-max text-black'
                        type='input'
                        name='group-name'
                        onChange={event => setName(event.target.value), event => event.target.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[0].disabled = false}
                    />
                </div>
            </div>
            <div>
                <div className='groupLabel' style={{fontSize:'14px'}}>Grade: </div>
                <div className='groupGrade' style={{fontSize:'14px'}}>
                    <input
                        className='group-grade-input border border-gray p-0.5 rounded-md w-16 md:w-max text-black'
                        type='input'
                        name='group-grade'
                        onChange={event => setGrade(event.target.value), event => event.target.parentElement.parentElement.parentElement.childNodes[2].childNodes[1].childNodes[0].disabled = false}
                        disabled
                    />
                </div>
            </div>
            <div>
                <div className='groupLabel' style={{fontSize:'14px'}}>Weight: </div>
                <div className='groupWeight' style={{fontSize:'14px'}}>
                    <input
                        className='group-weight-input border border-gray p-0.5 rounded-md w-16 md:w-max text-black'
                        type='input'
                        name='group-weight'
                        onChange={event => setWeight(event.target.value)/*, window.data[classNum][name] = [grade,weight]*/}
                        disabled
                    />
                </div>
            </div>
        </div>
    )
}


export default GroupBlock;