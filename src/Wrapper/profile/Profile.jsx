import React from 'react';
import Preloader from '../../Elements/preloder/preloader';
import usersFotoNull from '../../img/UsesrFotoNull.png';
import { Redirect } from "react-router-dom"
import RrofileStatus from "./RrofileStatus";



const Profile = (props) => {
if (props.isAuth===false) return <Redirect to={'/login'}/>
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
                        <img alt="img" src={props.profile.photos.small===null
                        ? usersFotoNull
                        :props.profile.photos.small}/>
                        <div>мой VK_-_{props.profile.contacts.vk} </div>
                        <RrofileStatus status={props.status} updateUserProfileThunkCreator={props.updateUserProfileThunkCreator}/>
                    </div>
                </div>

            )}
        </div>
    )
}
export default Profile