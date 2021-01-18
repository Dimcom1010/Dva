import {authMeThunkCreator} from "./authReduser";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialization: false,
}

export const appReduser = (state = initialState, action) => {

    switch (action.type) {

        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialization: true
            }

        default:
            return state;
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS})

export const initializationThunkCreator = () => (dispatch) => {

    let promise = dispatch(authMeThunkCreator())

    promise.then(() => {

            dispatch(initializedSuccess())
        })
}
/*
Promise.all([promise]) // что бы дождаться выполнния всех промисов их добавляем в массив
    .then(() => {
        dispatch(initializedSuccess())
    })
}*/


