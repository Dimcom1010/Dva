import React from "react";
import style from "./Profile.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../Elements/forms/forms";


const ProfileInfoContacts = ({profile})=>{
    return <div className={style.userInfo}>

        <div><b>userId </b> {profile.userId} </div>
        <div><b>lookingForAJob</b>_-_{profile.lookingForAJob? "Yes": "No" } </div>
        <div><b>lookingForAJobDescription</b>_-_{profile.lookingForAJobDescription} </div>
        <div><b>fullName</b>_-_{profile.fullName} </div>

        <div><b>github</b>_-_{profile.contacts.github} </div>
        <div><b>мой VK</b>_-_{profile.contacts.vk} </div>
        <div><b>facebook</b>_-_{profile.contacts.facebook} </div>
        <div><b>instagram</b>_-_{profile.contacts.instagram} </div>
        <div><b>twitter</b>_-_{profile.contacts.twitter} </div>
        <div><b>website</b>_-_{profile.contacts.website} </div>
        <div><b>youtube</b>_-_{profile.contacts.youtube} </div>
        <div><b>mainLink</b>_-_{profile.contacts.mainLink} </div>

        <div><b>Contacts</b>_-_{Object.keys (profile.contacts).map(key=>{
            return <Contact contactTitel={key} contactValue={profile.contacts[key]}></Contact>
        }) }
        </div>


        <ReduxProfileInfoContactsForm initionValues={profile.contacts}/>
    </div>

}
const Contact = ({contactTitel, contactValue})=>{
    return <div><b>{contactTitel}</b>" " - " " {contactValue} </div>
}



const ProfileInfoContactsForm = (props) => {

    return <>
        <form onSubmit={props.handleSubmit}>

            <Field name={"github"} component={Input}/>
            <Field name={"vk"} component={Input}/>
            <Field name={"facebook"} component={Input}/>
            <Field name={"instagram"} component={Input}/>
            <Field name={"twitter"} component={Input}/>
            <Field name={"website"} component={Input}/>
            <Field name={"youtube"} component={Input}/>
            <Field name={"mainLink"} component={Input}/>


        </form>
    </>
}
const ReduxProfileInfoContactsForm = reduxForm({form: 'ProfileInfoContacts'})(ProfileInfoContactsForm)

export default ProfileInfoContacts