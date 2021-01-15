import React from 'react';
import './MyFoto.css';
import MyFoto from "./MyFoto";

const MyFotoContainer = (props) => {
    let state=props.store.getState()

    return (
        <MyFoto FotosData={state.FotosData}/>
    )
}
export default MyFotoContainer