import style from "./Profile.module.css";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../Elements/forms/forms";
import React from "react";

const BlockDataForm = ({profile,...props}) => {
    debugger
    return <>
        <form className={style.contactsForm}
              onSubmit={props.handleSubmit}>
            <div><button>Сохранить</button></div>
            <Field name={"fullName"} component={Input} text={"fullName"}/>
            <Field name={"aboutMe"} component={Input} text={"aboutMe"}/>
            <Field name={"lookingForAJob"}   component={Input} type={"checkbox"} text={"lookingForAJob"}/>
            <Field name={"lookingForAJobDescription"} component={Textarea} text={"lookingForAJobDescription"}/>
            <div>
                <b>Contacts</b>:
                {Object.keys(profile.contacts).map(key=>{
                return <Field name={"contacts."+key} component={Input} text={key}/>

            })}
            </div>
        </form>
    </>
}
const BlockDataReduxForm = reduxForm({form: 'ProfileInfoContacts'})(BlockDataForm)

export default BlockDataReduxForm