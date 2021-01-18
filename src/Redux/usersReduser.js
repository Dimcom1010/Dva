import {usersAPI} from "../API/api";
import {preloderStatus} from "./preloaderReduser";
import {setButtonInProgress} from "./authReduser";

const FOLLOWER = 'FOLLOWER'
const UNFOLLOWER = 'UNFOLLOWER'
const SET_USERS = 'SET_USERS'
const TOTAL_COUNT = 'TOTAL_COUNT'
const PAGE_SIZE = 'PAGE_SIZE'
const CURRENT_PAGE = 'CURRENT_PAGE'

let initialState = {
    items: [],
    totalCount: 0,
    pageSize: 100,
    currentPage: 1,
    userId: 0

}

export const usersReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                items: action.users
            }
        }
        case FOLLOWER: {
            return {
                ...state,
                items: state.items.map(u => {
                    if (u.id === action.id)
                        return {...u, followed: true}
                    return u
                })
            }
        }
        case UNFOLLOWER: {
            return {
                ...state,
                items: state.items.map(u => {
                    if (u.id === action.id)
                        return {...u, followed: false}
                    return u
                })
            };
        }
        case TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCountAc
            }
        }
        case PAGE_SIZE: {
            return {
                ...state,
                pageSize: action.PageSizeAc
            }
        }
        case CURRENT_PAGE: {

            return {
                ...state,
                currentPage: action.currentPageAc
            }
        }

        default:                    /*Если ничго не пришло возвращаем просто state*/
            return state;
    }
}
export const followed = (id) => ({type: FOLLOWER, id})
export const unfollowed = (id) => ({type: UNFOLLOWER, id})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalCount = (totalCountAc) => ({type: TOTAL_COUNT, totalCountAc})
export const setPageSize = (PageSizeAc) => ({type: PAGE_SIZE, PageSizeAc})
export const setCurrentPage = (currentPageAc) => ({type: CURRENT_PAGE, currentPageAc})


export const getUsersThunkCreacor = (currentPage, pageSize) => async (dispatch) => {
    dispatch(preloderStatus(true))
    let response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(response.items))
    dispatch(setTotalCount(response.totalCount))
    dispatch(preloderStatus(false))
}

export const onPageChangedThunkCreacor = (pageNumber, pageSize) => async (dispatch) => {

    dispatch(setCurrentPage(pageNumber))
    dispatch(preloderStatus(true))
    let response = await usersAPI.getUsers(pageNumber, pageSize)
    dispatch(setUsers(response.items))
    dispatch(preloderStatus(false))
}

export const unFollowedThunkCreacor = (id) => {
    return async (dispatch) => {
        dispatch(setButtonInProgress(true, id))
        let response = await usersAPI.postUnFollowed(id)
        if (response.data.resultCode === 0) { //если запрос вернулся ok то 0
            dispatch(unfollowed(id))
        }
        dispatch(setButtonInProgress(false, id))
    }
}

export const FollowedThunkCreacor = (id) => {
    return async (dispatch) => {
        dispatch(setButtonInProgress(true, id)) //
        let response = await usersAPI.postFollowed(id)
        if (response.data.resultCode === 0) { //если запрос вернулся ok то 0
            dispatch(followed(id))
        }
        dispatch(setButtonInProgress(false, id))
    }
}

/* есть вопросик, зачем заключать в фигурные ковычки и писать ретурн
export const FollowedThunkCreacor = (id) => {
    return async (dispatch) => {
        dispatch(setButtonInProgress(true, id)) //
        let response = await usersAPI.postFollowed(id)
        if (response.data.resultCode === 0) { //если запрос вернулся ok то 0
            dispatch(followed(id))
        }
        dispatch(setButtonInProgress(false, id))
    }
}




export const FollowedThunkCreacor = (id) =>
    async (dispatch) => {
        dispatch(setButtonInProgress(true, id)) //
        let response = await usersAPI.postFollowed(id)
        if (response.data.resultCode === 0) { //если запрос вернулся ok то 0
            dispatch(followed(id))
        }
        dispatch(setButtonInProgress(false, id))
    }
*/
