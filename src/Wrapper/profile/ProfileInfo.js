import React from 'react';
import usersFotoNull from "../../img/UsesrFotoNull.png";
import RrofileStatusHooks from "./RrofileStatusHooks";


const ProfileInfo = ({small,status,updateUserProfileThunkCreator, ...props}) =>  {
    return <>
            <img alt="img" src={small === null
                ? usersFotoNull
                : small}/>
            <RrofileStatusHooks propsStatus={status}
                                updateUserProfileThunkCreator={updateUserProfileThunkCreator}/>
        </>

}
export default ProfileInfo