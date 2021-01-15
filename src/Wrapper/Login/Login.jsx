import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../utils/validation/validate";
import {Input} from "../../Elements/forms/forms";
import {connect} from "react-redux";
import {loginThunkCreator, logOutThunkCreator} from "../../Redux/authReduser";


const maxLength20=maxLength(20)

const LoginForm = (props) => {

    return (
        <>
            <div>
                <form onSubmit={props.handeleSubmit}>
                    <div>
                        <Field name={"email"} component={Input} placeholder={"Login"}
                               validate={[required, maxLength20]}/>
                    </div>
                    <div>
                        <Field name={"password"} component={Input} placeholder={"Password"} type={"password"}
                               validate={[required, maxLength20]}/>
                    </div>
                    <div>
                        <Field name={"rememberMe"} component={Input} type={"checkbox"}/> Remember Me
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

    const onAddMessage= (values)=>{
        debugger
      console.log('WOTT ON')
       /* debugger
        props.loginThunkCreator(formData.email, formData.password,formData.rememberMe) //loginThunkCreator это не санк криейтор это коннект подсовывает нам под таким же иминем колбек который диспачит вызов санккриейтора loginThunkCreator ур 78
*/
    }
    return (
        <>
            <div>
                <h1>Login</h1>
                <ReduxLoginForm onSubmit={onAddMessage}/>
            </div>
        </>
    )
}

export default connect (null, {loginThunkCreator,logOutThunkCreator})(Login) // мы в экспорте подменяем компоненту login контейнерной и поскольк экспорт по дефолту в том месте откуда мы ей вызываем никто ничего не видет ур 78