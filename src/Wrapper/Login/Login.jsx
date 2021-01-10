import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, require1} from "../../utils/validation/validate";
import {Input} from "../../Elements/forms/forms";


let maxLength15=maxLength(15)

const LoginForm = (props) => {

    return (
        <>
            <div>
                <form onSubmit={props.handeleSubmit}>
                    <div>
                        <Field name={"Login"} component={Input} placeholder={"Login"} validate={[require1, maxLength15]}/>
                    </div>
                    <div>
                        <Field name={"Password"} component={Input} placeholder={"Password"} validate={[require1, maxLength15]}/>
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