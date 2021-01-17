import React from "react";
import {connect} from "react-redux";
import {
    followed, FollowedThunkCreacor,
    getUsersThunkCreacor,
    onPageChangedThunkCreacor,
    setCurrentPage, setPageSize,
    setTotalCount, setUsers,
    unfollowed, unFollowedThunkCreacor,

} from "../../Redux/usersReduser";
import Users from "./Users";
import {setButtonInProgress} from "../../Redux/authReduser";
import {preloderStatus} from "../../Redux/preloaderReduser";

import {compose} from "redux";



class UsersAPIComponents extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreacor(this.props.currentPage, this.props.pageSize)
    }

    render() {
        return (
            <>
                <Users {...this.props} />
            </>
        )
    }
}




let mapStateToProps = (state) => {
    return {
        users: state.usersPage.items,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isPreloader: state.preloaderStatus.isPreloader,
        buttonInProgress: state.auth.buttonInProgress,
    }
}

export default compose (
    connect(mapStateToProps,
        {
            followed,
            unfollowed,
            setUsers,
            preloderStatus,
            setTotalCount,
            setPageSize,
            setCurrentPage,
            setButtonInProgress,
            getUsersThunkCreacor,
            onPageChangedThunkCreacor,
            unFollowedThunkCreacor,
            FollowedThunkCreacor
        }),
   // withAuthComponentHOC
)
(UsersAPIComponents)