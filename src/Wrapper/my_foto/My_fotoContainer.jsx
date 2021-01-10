import React from 'react';
import './My_foto.css';
import My_foto from "./My_foto";

const My_fotoContainer = (props) => {
    let state=props.store.getState()

    return (
        <My_foto FotosData={state.FotosData}/>
    )
}
export default My_fotoContainer