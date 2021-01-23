import React, {useState, useEffect} from 'react';

const RrofileStatusHooks = ({updateUserProfileThunkCreator, propsStatus}) => {
    debugger
    useEffect(() => {

            setStatus = propsStatus
        }, [propsStatus]
    )

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(propsStatus)

    let activateEditMode = () => {

        setEditMode(true)
    }
    let deActivateEditMode = () => {

        setEditMode(false)
        updateUserProfileThunkCreator(status)

    }
    let onStatusChange = (e) => {

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