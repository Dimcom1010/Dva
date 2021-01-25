import {profileAPI} from "../API/api";
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS='SET_STATUS'
const SET_FOTO='SET_FOTO'

let initialState = {
    profile: null,
    status:"",

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
debugger
            return{
                ...state,
                status: action.status
            }
        }

        case SET_FOTO: {

            return{
                ...state,
                profile: {...state.profile, photos:action.photos}
            }
        }

        default:                    /*Если ничго не пришло возвращаем просто state*/
            return state;
    }
}
export const setUserProfile=(profile)=>  ({type:SET_USER_PROFILE,profile})

export const setStatus=(status)=>  ({type:SET_STATUS,status})

export const setFoto=(photos)=>  ({type:SET_FOTO,photos})

export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
    let response = await profileAPI.getUser(userId)
            dispatch(setUserProfile(response.data))
}

export const updateUserProfileThunkCreator = (status) => async (dispatch) => {
    debugger
    let response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))}
}

export const getStatusProfileThunkCreator = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
            dispatch(setStatus(response.data))
}
export const saveFotoThunkCreator = (foto) => async (dispatch) => {
    let response = await profileAPI.saveFoto(foto)
    dispatch(setFoto(response.data.data.photos))
}

