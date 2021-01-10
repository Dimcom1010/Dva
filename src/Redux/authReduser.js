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
                ...action.data,
                isAuth:true
            }
        case BUTTERN_IN_PROGRESS:

            return{

                ...state,
                buttonInProgress: action.progress
             ? [...state.buttonInProgress,action.userId]
             : state.buttonInProgress.filter(id=>id != action.userId)
            }
        default:
            return state;
    }


}


export const setAuthUserData = (userId,login,email) =>
    ({type:SET_USER_DATA, data:{userId,login,email}}
    )
export const setButtonInProgress = (progress,userId) => ({type:BUTTERN_IN_PROGRESS, progress,userId})



export const authMeThunkCreator=()=>(dispatch)=>{
    authAPI.me()
        .then((response) => {
            if (response.resultCode === 0){
                let {id, login, email}= response.data
                dispatch(setAuthUserData(id, login, email))
            }
        })
}