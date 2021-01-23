import React from 'react';
import './MyFoto.css';
import {Redirect} from "react-router-dom";

let imge = "./Foto/Foto_"

const Foto = (props) => {

    return (
        <div>
            <div className="conteinerFoto">
                <div className="foto">
                    <img className="foto" src={imge + props.fotoId + ".jpg"} alt="s"/>
                </div>
                <a href=" https://nikuda.md">
                    <div className="buttonlikes">{props.fotolikes} </div>
                </a>
            </div>
            <div className="conteinerWrite">
                Leave your comment to the photo!)
                <textarea >  </textarea>
                <button>Send</button>
            </div>
        </div>
    )
}

const MyFoto = (props) => {

    if (props.isAuth===false) return <Redirect to={'/login'}/>

    let FotoData = props.FotosData.map(x => <Foto fotoId={x.fotoId} fotolikes={x.fotolikes}> </Foto>)

    return (
        <div className='Conteiner'>
            {FotoData}




        </div>


    )
}
export default MyFoto