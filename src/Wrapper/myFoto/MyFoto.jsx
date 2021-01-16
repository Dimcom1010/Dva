import React from 'react';
import './MyFoto.css';
import {Redirect} from "react-router-dom";



const Foto = (props) => {

    return (
        <div>
            <div className="conteinerFoto">
                <div className="foto">
                    <img className="foto" src={"./Foto/Foto_" + props.fotoId + ".jpg"} alt="s"/>
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
    /* let CometnData = CometnsData.map(x => <Cometn id={x.id} fotoId={x.fotoId} cometn={x.cometn} cometnlikes={x.cometnlikes} > </Cometn>)*/
    return (
        <div className='Conteiner'>
            {FotoData}

            {/*{CometnData}*/}


        </div>


    )
}
export default MyFoto