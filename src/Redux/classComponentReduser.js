let PLUS_AC = 'PLUS_AC';
let MINUS_AC = 'MINUS_AC';
let SEND_QUESTIONNAIRE = 'SEND_QUESTIONNAIRE'

let initialState = {
        foto: [null],
        status: ['My status'],
        itog: [0],
        lastName: '',
        Name: '',
        fatherName: '',
        Sity: '',
        aboutMe: ''
    }

;

export const classComponentReduser = (state = initialState, action) => {

    switch (action.type) {

        case PLUS_AC :
            let newItog = state.itog
            return {
                ...state,
                itog: newItog + 1,
            }

        case MINUS_AC :
            let newItog1 = state.itog
            return {
                ...state,
                itog: newItog1 - 1,
            }
        case SEND_QUESTIONNAIRE :
            debugger
            return {
                ...state,
                ...action.value
            }

        default:                    /*Если ничго не пришло возвращаем просто state*/
            return state;
    }

    return state;
}


export const plus = () => ({type: PLUS_AC})
export const minus = () => ({type: MINUS_AC})
export const sendQuestionnaire = (value) => ({type: SEND_QUESTIONNAIRE, value})