import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../utils/validation/validate";
import {Input} from "../../Elements/forms/forms";
import {connect} from "react-redux";
import {loginThunkCreator, logOutThunkCreator} from "../../Redux/authReduser";


const maxLength20 = maxLength(20)

const LoginForm = (props) => {

    return (
        <>
            <>
                <form onSubmit={props.handleSubmit}>
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
            </>
        </>
    )
}

const ReduxLoginForm = reduxForm({form: 'Login'})(LoginForm)

const LogOutForm = (props) => {

    return (
        <>
            <>
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <h4>Вы залогинены</h4>
                        <h3>Хотите выйти?</h3>
                        <div>
                            <button>Log Out</button>
                        </div>
                    </div>
                </form>
            </>
        </>
    )
}

const ReduxLogOutForm = reduxForm({form: 'Login'})(LogOutForm)

const Login = (props) => {

    const logInSubmit = (values) => {

        props.loginThunkCreator(values.email, values.password, values.rememberMe) //loginThunkCreator это не санк криейтор это коннект подсовывает нам под таким же иминем колбек который диспачит вызов санккриейтора loginThunkCreator ур 78
    }

    const logOutSubmit = (values) => {
        props.logOutThunkCreator()
    }


    return (
        <>
            <div>
                {!props.isAuth ?
                    <div>
                        <h1>Login</h1>
                        <ReduxLoginForm onSubmit={logInSubmit}/>
                    </div>
                    :
                    <div>
                        <h1>LogOut</h1>
                        <ReduxLogOutForm onSubmit={logOutSubmit}/>
                    </div>
                }
            </div>
        </>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {loginThunkCreator, logOutThunkCreator})(Login) // мы в экспорте подменяем компоненту login контейнерной и поскольк экспорт по дефолту в том месте откуда мы ей вызываем никто ничего не видет ур 78