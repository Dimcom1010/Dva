import React from "react";
import {Field, reduxForm} from "redux-form";
import {loginThunkCreator, logOutThunkCreator} from "../../Redux/authReduser";
import ReduxLoginForm from "./ReduxLoginForm";
import {connect} from "react-redux";
import ReduxLogOutForm from "./ReduxLogOutForm";





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
                        Login
                        <ReduxLoginForm onSubmit={logInSubmit}/>
                    </div>
                    :
                    <div>
                        LogOut
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