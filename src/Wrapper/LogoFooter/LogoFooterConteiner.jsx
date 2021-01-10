import React from 'react';
import './LogoFooter.css';
import {connect} from "react-redux";
import LogoFooter from "./LogoFooter";
import {authMeThunkCreator, setAuthUserData} from "../../Redux/authReduser";


class LogoFooterAPIConteiner extends React.Component {

    componentDidMount() {
        this.props.authMeThunkCreator()
            }

    render() {

        return (
            <div className='CoverPage'>
                <LogoFooter {...this.props}/>
            </div>
        )
    }
}


let mapStateToProps = (state) => ({

    isAuth:state.auth.isAuth,
    login:state.auth.login,
    email:state.auth.email

})


export default connect(mapStateToProps,{setAuthUserData,authMeThunkCreator})(LogoFooterAPIConteiner)