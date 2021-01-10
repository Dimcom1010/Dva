let PRELOADER_STATUS = 'PRELOADER_STATUS'

let initialState = {
    isPreloader: true
}

export const preloaderRreduser = (state = initialState, action) => {

    switch (action.type) {

        case PRELOADER_STATUS: {

            return {
                ...state,
                isPreloader: action.status
            }
        }

        default:                    /*Если ничго не пришло возвращаем просто state*/
            return state;
    }
}

export const preloderStatus = (status) => ({type: PRELOADER_STATUS, status})