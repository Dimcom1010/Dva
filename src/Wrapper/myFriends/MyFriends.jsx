import React from 'react';
import mcss from './MyFriends.module.css';
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLength, nothing} from "../../utils/validation/validate";
import {Textarea} from "../../Elements/forms/forms";

const maxLength40=maxLength(40)

const MyFriendsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'Post1'} component={Textarea}
                   lable="messeg"                         // отображается в placeholder
                   validate={[maxLength40,nothing]}/>
            <button>Отправить</button>
        </form>
    )
}
const ReduxMyFriendsForm = reduxForm({form: 'MyFriends'})(MyFriendsForm)


const Friend = (props) => {
    return (
        <NavLink to={'/preloder/' + props.id} className={mcss.MyFriend}>

            <img className={mcss.ava} src={"./Ava/ava_" + props.id + ".jpg"} alt=""/>
            <div className={mcss.name}>
                <div>{props.name} {props.lastname}</div>
                <div>{props.tel} </div>
            </div>

        </NavLink>
    )
}

const Dialog = (props) => {
    return (
        <div className={mcss.MyDialog}>
            <img className={mcss.avaDialog} src={"./Ava/ava_" + props.id + ".jpg"} alt=""/>
            <div>{"- " + props.dialog}</div>

        </div>
    )
}

const MyFriends = (props) => {

    let FriendsElement = props.FriendsData.map(x => <Friend key={x.id} id={x.id} name={x.name} lastname={x.lastname}
                                                            tel={x.tel}> </Friend>)
    let DialogElement = props.DialogsData.map(x => <Dialog key={x.id} id={x.id} dialog={x.dialog}> </Dialog>)

    let onAddMessage = (values) => {
        props.addPostCreator(values.Post1)
    }

    return (
        <div className={mcss.CoverPage}>
            <div className={mcss.conteinerFriends}>
                <div className={mcss.MyFriends}>
                    {FriendsElement}
                </div>
                <div className={mcss.Mydialogs}>
                    {DialogElement}
                    <ReduxMyFriendsForm onSubmit={onAddMessage}/>


                </div>
            </div>
        </div>
    )
}
export default MyFriends
