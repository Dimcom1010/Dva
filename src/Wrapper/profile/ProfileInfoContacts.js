import React, {useState} from "react";
import style from "./Profile.module.css";
import styleForm from "../../Elements/forms/Forms.module.css"
import BlockDataReduxForm from "./BlockDataForm";


const ProfileInfoContacts = ({profile, isOwser,saveProfilesThunkCreator}) => {
    debugger
    let [editMode, setEditMode] = useState(false)
    let activateEditMode = () => {
        setEditMode(true)
    }

    let onSubmit = (formData) => {
        debugger
        saveProfilesThunkCreator(formData)
        setEditMode(false)
        console.log(formData)


    }

    return <div className={style.userInfo}>

        {!editMode && <>
            < BlockData profile={profile}
                        isOwser={isOwser}
                        activateEditMode={activateEditMode}/>

            <div><b>Contacts</b>:

                {Object.keys(profile.contacts).map(key => {
                return <Contact contactTitel={key}
                                contactValue={profile.contacts[key]}/>

            })}
            </div>
        </>
        }
        {editMode && <BlockDataReduxForm onSubmit={onSubmit}
                                         initialValues={profile}
                                         profile={profile}/>}
    </div>

}
const BlockData = ({profile, isOwser, activateEditMode}) => {
    return <>
        {isOwser && <button onClick={activateEditMode}>Изменить</button>}
        <div className={styleForm.inputWraper}>
            <b>fullName</b><>{profile.fullName}</>
        </div>
        <div className={styleForm.inputWraper}>
            <b>aboutMe </b> <>{profile.aboutMe}</>
        </div>
        <div className={styleForm.inputWraper}>
            <b>lookingForAJob</b><>{profile.lookingForAJob ? "Yes" : "No"}</>
        </div>
        {profile.lookingForAJob &&
        <div className={styleForm.inputWraper}>
            <b>lookingForAJobDescription</b>{profile.lookingForAJobDescription} </div>}
    </>
}

const Contact = ({contactTitel, contactValue}) => {
    return <>
        {contactValue && <div className={styleForm.inputWraper}><b>{contactTitel}</b> <a href={contactValue}>{contactValue}</a>
        </div>}
    </>
}

export default ProfileInfoContacts