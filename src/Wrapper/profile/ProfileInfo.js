import React from 'react';
import usersFotoNull from "../../img/UsesrFotoNull.png";
import RrofileStatusHooks from "./RrofileStatusHooks";


const ProfileInfo = ({small, status, updateUserProfileThunkCreator, isOwser,saveFoto, ...props}) => {
    const onMainFotoSelected =(e)=>{
        if (e.target.files.length) {
            saveFoto(e.target.files[0])
        }
    }

    return <>
        <img alt="img" src={small === null
            ? usersFotoNull
            : small}/>

        <br/>{isOwser && <input type={"file"} onChange={onMainFotoSelected}/>}
        <RrofileStatusHooks
                            propsStatus={status}
                            updateUserProfileThunkCreator={updateUserProfileThunkCreator}
                            isOwser={isOwser}
        />
    </>

}
export default ProfileInfo