/*const ADD_NOW_POST_TEXT = 'ADD-NOW-POST-TEXT'*/
const ADD_POST = 'ADD-POST';

let initialState = {
    FriendsData: [
        {id: '1', name: 'Dima', lastname: 'Yushcenko', tel: '+375336532554'},
        {id: '2', name: 'Masha', lastname: 'Yushcenko', tel: '+375332545452'},
        {id: '3', name: 'Vika', lastname: 'Tarasevich', tel: '+375336452524'},
        {id: '4', name: 'Sasha', lastname: 'Tarasevich', tel: '+375335245525'},
        {id: '5', name: 'Dima', lastname: 'Taira', tel: '+375336532554'},
        {id: '6', name: 'Masha', lastname: 'Taira', tel: '+375332545452'},
        {id: '7', name: 'Vika', lastname: 'Taira', tel: '+375336452524'},
        {id: '8', name: 'Sasha', lastname: 'Ivanov', tel: '+375335245525'},
        {id: '9', name: 'Dima', lastname: 'Ivanov', tel: '+375336532554'},
        {id: '10', name: 'Masha', lastname: 'Ivanov', tel: '+375332545452'},
        {id: '11', name: 'Vika', lastname: 'Ivanov', tel: '+375336452524'},
        {id: '12', name: 'Sasha', lastname: 'Tit', tel: '+375335245525'},
        {id: '13', name: 'Dima', lastname: 'Tit', tel: '+375336532554'},
        {id: '14', name: 'Masha', lastname: 'Tit', tel: '+375332545452'},
        {id: '15', name: 'Vika', lastname: 'Tit', tel: '+375336452524'},
        {id: '16', name: 'Sasha', lastname: 'Taira', tel: '+375335245525'}
    ],           /*тут хроняться данные моих друзей id name tel  и тд*/

    DialogsData: [                          /*тут хроняться диалочи myFriends*/
        {id: '1', dialog: ' Hi!!! '},
        {id: '2', dialog: 'Ho-Ho!'},
        {id: '3', dialog: 'Smile'},

    ]
}

export const dialogReduser = (state = initialState, action) => {


    switch (action.type) {


        case ADD_POST: /*экшен криейторы  возвращает стэйт*/

            let newDialog = {                  /*формируем новый диалог*/
                id: 4,
                dialog: action.text,           /*забирает значение из NowPostText хронящегося с стэйте и присваивает елементу dialog массчива  newDialog*/
            };
            return {
                ...state,            /*поверхстное копирование state*/
                NowPostText: (''),   /*обнуление строки поске отпраки сообщения*/
                DialogsData: [...state.DialogsData, newDialog]  /*глубокое копирование DialogsData в  stateCopy из state после запятой push нового сообщения*/
            };
        default:                    /*Если ничго не пришло возвращаем просто state*/
            return state;
    }


}
export const addPostCreator =(text)=>  ({type:ADD_POST,text})

/*export const addNewPostTextCreator = (textMessage1) =>
    ({type:ADD_NOW_POST_TEXT, newtext:textMessage1}
    )*/


/*
            stateCopy = {...state};
            stateCopy.NowPostText = {...state.NowPostText}
            stateCopy.NowPostText = action.newtext;    /!*записывает принятый симбвол в обыект стэйта  NowPostText*!/
            */

/*
            stateCopy.DialogsData = [...state.DialogsData]/!* создаём копию объекта DialogsData в state *!/
            stateCopy.DialogsData.push(newDialog) /!*добавляем новый диалог в масслив новый элемент *!/

            stateCopy.NowPostText = (' ')          /!* обнуление поля ввода textaria *!/
            return stateCopy;             /!*работает при нажатии на кнопку отправить*!/

            */




