import React,{useEffect, useState} from 'react';


const RrofileStatusHooks = ({updateUserProfileThunkCreator, propsStatus,isOwser}) => {
    debugger


    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(propsStatus)

    useEffect(() => {
        debugger
            setStatus (propsStatus)
        }, [propsStatus]
    )

    let activateEditMode = () => {
        debugger
        setEditMode(true)
    }
    let deActivateEditMode = () => {
        debugger
        setEditMode(false)
        updateUserProfileThunkCreator(status)

    }
    let onStatusChange = (e) => {
        debugger
        setStatus(e.currentTarget.value)
    }


    return (

        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={(isOwser? activateEditMode: null)}> {propsStatus || '----'}</span>
            </div>}
            {editMode &&
            <div>
                <input onChange={onStatusChange}
                       autoFocus={true}
                       onBlur={deActivateEditMode}
                       value={status}></input>
            </div>}
        </div>
    )
}

export default RrofileStatusHooks