import {authAPI} from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA'
const BUTTERN_IN_PROGRESS ='BUTTERN_IN_PROGRESS'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    buttonInProgress: []
}

export const authReduser = (state = initialState, action) => {


    switch (action.type) {

        case SET_USER_DATA:

            return {
                ...state,
                ...action.payload,

            }
        case BUTTERN_IN_PROGRESS:

            return{

                ...state,
                buttonInProgress: action.progress
             ? [...state.buttonInProgress,action.userId]
             : state.buttonInProgress.filter(id=>id !== action.userId)
            }
        default:
            return state;
    }


}


export const setAuthUserData = (userId,login,email,isAuth) =>
    ({type:SET_USER_DATA, payload:{userId,login,email,isAuth}}
    )
export const setButtonInProgress = (progress,userId) => ({type:BUTTERN_IN_PROGRESS, progress,userId})



export const authMeThunkCreator=()=>(dispatch)=>{
    debugger
    authAPI.me()
        .then((response) => {
            if (response.resultCode === 0){
                debugger
                let {id, login, email}= response.data
                dispatch(setAuthUserData(id, login, email, true))
            }
        })
}
export const loginThunkCreator=(email, password, rememberMe)=>(dispatch)=>{
    debugger
    authAPI.login(email, password, rememberMe)
        .then((response) => {
            debugger
            if (response.data.resultCode === 0){
                dispatch(authMeThunkCreator())
            }
        })
}
export const logOutThunkCreator=()=>(dispatch)=>{
    debugger
    authAPI.logOut()
        .then((response) => {
            debugger
            if (response.data.resultCode === 0){

                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}