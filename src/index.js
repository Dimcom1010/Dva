import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./Redux/redux-store";
import {Provider} from "react-redux";


/*let rerenderEntireTree = (state) => { /!*перерисовка страницы*!/*/

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App appstate={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
)



/*rerenderEntireTree(store.getState())   /!*вызов функции перерисовки сайта посл внесения изменения  в стэйт или ещё куда*!/
let state = store.getState();*/
/*store.subscribe(() => {
    rerenderEntireTree();
});*/
reportWebVitals();  /*анализ производительности сайта*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals