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

export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
    let response = await profileAPI.getUser(userId)
            dispatch(setUserProfile(response.data))
}

export const updateUserProfileThunkCreator = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))}
}

export const getStatusProfileThunkCreator = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
            dispatch(setStatus(response.data))
}

