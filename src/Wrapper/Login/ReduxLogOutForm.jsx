import React from "react";
import {reduxForm} from "redux-form";

const LogOutForm = (props) => {

    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                Хотите выйти?
                <div>
                    <button><h3>Log Out</h3></button>
                </div>
            </div>
        </form>
    </>
}

const ReduxLogOutForm = reduxForm({form: 'Login'})(LogOutForm)
export default ReduxLogOutForm