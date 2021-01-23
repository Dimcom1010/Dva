import React,{useState,useEffect} from 'react';

const RrofileStatusHooks =({updateUserProfileThunkCreator,propsStatus}) => {

    useEffect( ()=>{
        debugger
            setStatus=propsStatus
        },[propsStatus]
    )

    let [editMode,setEditMode] = useState(false)
    let [status,setStatus] = useState(propsStatus)

    let activateEditMode =()=>{
        debugger
        setEditMode(true)
    }
    let deActivateEditMode =()=>{
        debugger
        setEditMode(false)
        updateUserProfileThunkCreator(status)

}
    let onStatusChange =(e) => {
        debugger
        setStatus(e.currentTarget.value)
    }


        return (

            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}> {propsStatus || '----'}</span>
                    </div>}
                {editMode &&
                    <div>
                        <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode} value={status}></input>
                    </div>}
            </div>
        )
}

export default RrofileStatusHooks