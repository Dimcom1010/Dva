import React from 'react';
import Preloader from '../../Elements/preloder/preloader';
import {Redirect} from "react-router-dom"
import ProfileInfo from "./ProfileInfo";


const Profile = ({isOwser,status,updateUserProfileThunkCreator,saveFotoThunkCreator,...props}) => {
    debugger
    if (props.isAuth === false) return <Redirect to={'/login'}/>

    return (

        <div>
            {!props.profile ? (<Preloader/>
            ) : (
                <div className='CoverPage'>
                    <div className='headeText'>
                        <h1>I'm {props.profile.fullName} </h1>
                        <div>Статус_-_{props.profile.aboutMe} </div>
                        <div>мой VK_-_{props.profile.contacts.vk} </div>

                        <ProfileInfo
                            isOwser={isOwser}
                            saveFoto={saveFotoThunkCreator}
                            small={props.profile.photos.small}
                            status={status}
                            updateUserProfileThunkCreator={updateUserProfileThunkCreator}/>

                        <div>мой ID_-_{props.profile.userId} </div>

                    </div>
                </div>

            )}
        </div>
    )
}
export default Profile