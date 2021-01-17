import React from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import Profile from "./Profile";
import {
    getStatusProfileThunkCreator,
    getUserProfileThunkCreator,
    updateUserProfileThunkCreator
} from "../../Redux/profileReduser";
import {compose} from "redux";


class ProfileAPIConteiner extends React.Component {

    componentDidMount() {
        debugger
        let id = this.props.match.params.userId
        if (!this.props.match.params.userId) {
            debugger
            id = this.props.userId
            if (!id){
                this.props.history.push('/login')
            }
        } // в скобках id ользователя который сейчас в строке Http
        debugger
        this.props.getUserProfileThunkCreator(id)
        this.props.getStatusProfileThunkCreator(id)
    }

    render() {

        return (
            <div className='CoverPage'>
                <Profile {...this.props} updateUserProfileThunkCreator={this.props.updateUserProfileThunkCreator}/>
            </div>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId

})

export default compose(
    connect(mapStateToProps, {getUserProfileThunkCreator, getStatusProfileThunkCreator, updateUserProfileThunkCreator}), // добавляет в пропсы диспатчи и стэёт
    withRouter,                                     // добавляет в пропсы настройки роутера
    //withAuthComponentHOC                          // добавляет регистрационную аутнетификацию с перенаправлением на логин
)
(ProfileAPIConteiner)