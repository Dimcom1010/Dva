import React from 'react';
import Preloader from '../../Elements/preloder/preloader';
import {Redirect} from "react-router-dom"
import ProfileInfo from "./ProfileInfo";
import ProfileInfoContacts from "./ProfileInfoContacts";

const Profile = ({isOwser, status, updateUserProfileThunkCreator, saveFotoThunkCreator,profile,isAuth, ...props}) => {
    debugger
    if (isAuth === false) return <Redirect to={'/login'}/>

    return (
        <div>
            {!profile ? (<Preloader/>
            ) : (
                <div className='CoverPage'>

                    <ProfileInfo
                        isOwser={isOwser}
                        saveFoto={saveFotoThunkCreator}
                        small={profile.photos.large }
                        status={status}
                        updateUserProfileThunkCreator={updateUserProfileThunkCreator}/>
                    <ProfileInfoContacts profile={profile}/>
                </div>
            )}
        </div>
    )
}
export default Profile