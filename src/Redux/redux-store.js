import {applyMiddleware, combineReducers, createStore} from 'redux';
import {dialogReduser} from './dialogReduser';
import {cartComentReduser} from './cartComentReduser';
import {myPostReduser} from './myPostReduser';
import {classComponentReduser} from './classComponentReduser';
import {usersReduser} from './usersReduser';
import {preloaderRreduser} from './preloaderReduser';
import {profileReduser} from './profileReduser';
import {authReduser} from './authReduser';
import thunkMiddleware  from "redux-thunk"
import {reducer as formReduser}  from "redux-form"
import {appReduser} from "./appReduser";

let reducers = combineReducers({
    DialogsData2 : dialogReduser,
    cartComentReduser: cartComentReduser,
    myPost : myPostReduser,
    classComponent:classComponentReduser,
    usersPage:usersReduser,
    preloaderStatus:preloaderRreduser,
    profilePage:profileReduser,
    auth:authReduser,
    form: formReduser,
    appReduser:appReduser

}) ;

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store