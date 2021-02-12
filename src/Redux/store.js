
import {cartComentReduser} from "./cartComentReduser";
import {myPostReduser} from "./myPostReduser";
import {dialogReduser} from "./dialogReduser";

const ADD_NOW_POST_TEXT = 'ADD-NOW-POST-TEXT'
const ADD_POST = 'ADD-POST';

let store = {
    _state: {
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

        ],          /*тут хроняться диалочи myFriends*/
        FotosData: [
            {fotoId: 1, fotolikes: 2},
            {fotoId: 2, fotolikes: 12},
            {fotoId: 3, fotolikes: 23},
            {fotoId: 4, fotolikes: 5}
        ],           /*тут хроняться диалочи myFriends*/
        myPost: [
            {fotoPost: 1, fotolikes: 2},
            {fotoPost: 2, fotolikes: 12},
            {fotoPost: 3, fotolikes: 23},
            {fotoPost: 4, fotolikes: 5}
        ],           /*тут хроняться диалочи myPost*/



        NowPostText: ''                 /*тут хранится текст ввёдённый с клавы в пеле для ввода */
    },       /*Данные state*/
    _callDubscriber() {
        console.log('now screen')
    },

    getState() {
        return this._state;
    },                      /*возвращает стэйт*/
    subscribe(observer) {

        this._callDubscriber = observer
    },

    dispatch(action) {


        this._state = dialogReduser( this._state, action )
        this._state = cartComentReduser(this._state,  action)
        this._state = myPostReduser(this._state,  action)
        this._callDubscriber(this._state)
         /*перерисовка */


    } /*конец dispatch*/

} /*конец store*/


                                  /*ВСЕ КРИЕЙТОРЫ */
export const addPostCreator =()=>  ({type:ADD_POST})
export const addNewPostTextCreator =(textMessage1)=>
    ({type:ADD_NOW_POST_TEXT, newtext:textMessage1}
)
export default store






/*

let rerenderEntireTree= () => {
    console.log('now screen')
}

let state = {
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
    ],
    DialogsData: [
        {id: '1', dialog: ' Hi!!! '},
        {id: '2', dialog: 'Ho-Ho!'},
        {id: '3', dialog: 'Smile'},

    ],
    FotosData: [
        {fotoId: 1, fotolikes: 2},
        {fotoId: 2, fotolikes: 12},
        {fotoId: 3, fotolikes: 23},
        {fotoId: 4, fotolikes: 5}
    ],
    NowPostText: ''
}

export let addPost = () => {  /!*Экспорт без дефолта, нужно импортировать немного иначе import {addPost}*!/
    let newDialog = {                  /!*формируем новый диалог*!/
        id: 4,
        dialog: state.NowPostText
    };

    state.DialogsData.push(newDialog); /!*добавляем новый диалог в масслив новый элемент *!/
    rerenderEntireTree(state)
}

export let addNowPostText = (posttext) => {

    state.NowPostText = posttext;
    rerenderEntireTree(state)
}


export const subscribe = (observer) => {   /!*создаём функцию корорую импортируем в индекс для того что бы через её перебросить функцию rerenderEntireTree*!/
    rerenderEntireTree = observer      /!*rerenderEntireTree принадлежащая этой странице (заглушка) переопредилиться и станен rerenderEntireTree которую получила subscribe*!/
}



/!*методы до введения диспача*!/
/!*

addPost() {
    let newDialog = {                  /!*формируем новый диалог*!/
        id: this.i,
        dialog: this._state.NowPostText,           /!*забирает значение из NowPostText хронящегося с стэйте и присваивает елементу dialog массчива  newDialog*!/
    };
    this._state.DialogsData.push(newDialog); /!*добавляем новый диалог в масслив новый элемент *!/
    this._callDubscriber(this._state)        /!*перерисовка *!/
},                     /!*работает при нажатии на кнопку отправить*!/
addNowPostText(posttext) {                  /!*принимает значение переменной textMessage1 (симбвол) которая пришла из myFriends *!/

    this._state.NowPostText = posttext;    /!*записывает принятый симбвол в обыект стэйта  NowPostText*!/
    this._callDubscriber(this._state)      /!*перерисовывает страницу с мы в поле ввода видим симбвол  NowPostText при следующей итерации симбволы приходят с уже введёнными ранее и почучается какбы их добавление*!/
},      /!*работает при ввоте с клавиатуры в поле для ввода*!/


*!/



/!*старый диспач до редьюреров*!/
/!*
if (action.type === ADD_POST) {      /!*возвращает стэйт*!/
    let newDialog = {                  /!*формируем новый диалог*!/
        id: 4,
        dialog: this._state.NowPostText,           /!*забирает значение из NowPostText хронящегося с стэйте и присваивает елементу dialog массчива  newDialog*!/
    };
    this._state.DialogsData.push(newDialog); /!*добавляем новый диалог в масслив новый элемент *!/
    this._state.NowPostText = (' ')          /!* обнуление поля ввода textaria *!/

}                      /!*работает при нажатии на кнопку отправить*!/

else if (action.type === ADD_NOW_POST_TEXT) { /!*принимает значение переменной textMessage1 (симбвол) которая пришла из myFriends *!/

    this._state.NowPostText = action.newtext;    /!*записывает принятый симбвол в обыект стэйта  NowPostText*!/
}     /!*работает при ввоте с клавиатуры в поле для ввода*!/
*!/
*!/
*/
