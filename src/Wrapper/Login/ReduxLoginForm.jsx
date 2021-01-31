import {maxLength, required} from "../../utils/validation/validate";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../Elements/forms/forms";
import stule from "../../Elements/forms/Forms.module.css";
import LogigCss from "./Login.module.css"

const maxLength20 = maxLength(20)

const LoginForm = ({handleSubmit, ...props}) => {

    return <form onSubmit={handleSubmit} className={LogigCss.Wrapper}>
        <div className={LogigCss.login_wrapper}>
            <div>
                <Field  name={"email"} component={Input} placeholder={"Login"}
                       validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field  name={"password"} component={Input} placeholder={"Password"} type={"password"}
                       validate={[required, maxLength20]}/>
            </div>
            {props.error && <div className={stule.comenErrors}> {props.error} </div>}
            <div>
                <Field name={"rememberMe"} component={Input} type={"checkbox"}/> Remember Me
            </div>

            <div>
                <button><h3>Log in</h3></button>
            </div>
        </div>
    </form>

}

const ReduxLoginForm = reduxForm({form: 'Login'})(LoginForm)

export default ReduxLoginForm