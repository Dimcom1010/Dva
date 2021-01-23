import React from 'react';
import Preloader from '../../Elements/preloder/preloader';
import usersFotoNull from '../../img/UsesrFotoNull.png';
import {Redirect} from "react-router-dom"
import RrofileStatusHooks from "./RrofileStatusHooks";
import ProfileInfo from "./ProfileInfo";


const Profile = (props) => {
    if (props.isAuth === false) return <Redirect to={'/login'}/>
    debugger
    return (

        <div>
            {!props.profile ? (<Preloader/>
            ) : (
                <div className='CoverPage'>
                    <div className='headeText'>
                        <h1>I'm {props.profile.fullName} </h1>
                        <div>Статус_-_{props.profile.aboutMe} </div>
                        <div>мой VK_-_{props.profile.contacts.vk} </div>

                        <ProfileInfo small={props.profile.photos.small} status={props.status} updateUserProfileThunkCreator={props.updateUserProfileThunkCreator}/>

                        <div>мой ID_-_{props.profile.userId} </div>

                    </div>
                </div>

            )}
        </div>
    )
}
export default Profile