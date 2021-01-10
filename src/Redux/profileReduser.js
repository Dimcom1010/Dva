import {profileAPI} from "../API/api";
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS='SET_STATUS'


let initialState = {
    profile: null,
    status:""



}

export const profileReduser = (state = initialState, action) => {


    switch (action.type) {
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case SET_STATUS: {

            return{
                ...state,
                status: action.status
            }
        }

        default:                    /*Если ничго не пришло возвращаем просто state*/
            return state;
    }


}
export const setUserProfile=(profile)=>  ({type:SET_USER_PROFILE,profile})

export const setStatus=(status)=>  ({type:SET_STATUS,status})

export const getUserProfileThunkCreator = (userId) => (dispatch) => {

    profileAPI.getUser(userId)
        .then((response) => {

            dispatch(setUserProfile(response.data))
        })
}

export const updateUserProfileThunkCreator = (status) => (dispatch) => {

    profileAPI.updateStatus(status)
        .then((response) => {

            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }

        })
}

export const getStatusProfileThunkCreator = (userId) => (dispatch) => {

    profileAPI.getStatus(userId)
        .then((response) => {

            dispatch(setStatus(response.data))
        })
}

