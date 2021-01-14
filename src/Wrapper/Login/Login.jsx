import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../utils/validation/validate";
import {Input} from "../../Elements/forms/forms";


const maxLength20=maxLength(20)

const LoginForm = (props) => {

    return (
        <>
            <div>
                <form onSubmit={props.handeleSubmit}>
                    <div>
                        <Field name={"Login"} component={Input} placeholder={"Login"}
                               validate={[required, maxLength20]}/>
                    </div>
                    <div>
                        <Field name={"Password"} component={Input} placeholder={"Password"}
                               validate={[required, maxLength20]}/>
                    </div>
                    <div>
                        <Field name={"RememberMe"} component={'input'} type={"checkbox"}/> RememberMe
                    </div>
                    <div>
                        <button>Log in</button>
                    </div>
                </form>
            </div>
        </>
    )
}

const ReduxLoginForm = reduxForm({form:'Login'})(LoginForm)

const Login =(props) =>{
    const onSubmit= (formData)=>{
        console.log(formData)
    }
    return (
        <>
            <div>
                <h1>Login</h1>
                <ReduxLoginForm onSubmit={onSubmit}/>
            </div>
        </>
    )
}

export default Login