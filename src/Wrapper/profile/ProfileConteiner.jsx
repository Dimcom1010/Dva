import React from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import Profile from "./Profile";
import {
    getStatusProfileThunkCreator,
    getUserProfileThunkCreator, saveFotoThunkCreator, saveProfilesThunkCreator,
    updateUserProfileThunkCreator
} from "../../Redux/profileReduser";
import {compose} from "redux";


class ProfileAPIConteiner extends React.Component {

    refreshProfile() {
        let id = this.props.match.params.userId
        if (!id) {
            id = this.props.userId
            if (!id) {
                this.props.history.push('/login')
            }
        } // в скобках id ользователя который сейчас в строке Http
        this.props.getUserProfileThunkCreator(id)
        this.props.getStatusProfileThunkCreator(id)
    }

    componentDidMount() {

        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return (
            <div className='CoverPage'>
                <Profile {...this.props}
                         isOwser={!this.props.match.params.userId}
                         status=  {this.props.status}
                         updateUserProfileThunkCreator={this.props.updateUserProfileThunkCreator}/>
            </div>
        )
    }
}



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth

})

export default compose(
    connect(mapStateToProps,
        {getUserProfileThunkCreator,
            getStatusProfileThunkCreator,
            updateUserProfileThunkCreator,
            saveFotoThunkCreator,
            saveProfilesThunkCreator}), // добавляет в пропсы диспатчи и стэёт
    withRouter,                                     // добавляет в пропсы настройки роутера
    //withAuthComponentHOC                          // добавляет регистрационную аутнетификацию с перенаправлением на логин
)
(ProfileAPIConteiner)