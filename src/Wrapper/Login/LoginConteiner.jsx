/*
import React from "react";
import {connect} from "react-redux";
import {followedAC, setCurrentPageAC, setPageSizetAC, setTotalCountAC, setUsersAC, unfollowedAC} from "../../Redux/usersReduser";
import {preloderStatusAC} from "../../Redux/preloaderReduser";

import axios from "axios";



class LoginAPIComponents extends React.Component {

    componentDidMount() {

        if (this.props.users.length === 0) {
            this.props.preloderStatus(true)
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)

                .then((resp) => {
                    this.props.setUsers(resp.data.items)
                    this.props.setTotalCount(resp.data.totalCount)
                    this.props.preloderStatus(false)

                })
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.preloderStatus(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)

            .then((resp) => {
                this.props.setUsers(resp.data.items)
                this.props.preloderStatus(false)

            })
    }

    render() {
        return (
            <>
                <Users
                    users={this.props.users}
                    totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    unfollowed={this.props.unfollowed}
                    followed={this.props.followed}
                    onPageChanged={this.onPageChanged}
                    isPreloader={this.props.isPreloader}

                />

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
        isPreloader:state.preloaderStatus.isPreloader

    }
}

export default connect(mapStateToProps,
    {
        followed: followedAC,
        unfollowed: unfollowedAC,
        setUsers: setUsersAC,
        preloderStatus:preloderStatusAC,
        setTotalCount: setTotalCountAC,
        setPageSize: setPageSizetAC,
        setCurrentPage: setCurrentPageAC
    })(LoginAPIComponents);*/
