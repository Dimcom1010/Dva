import React from 'react';
import './MyFoto.css';


/*
let CometnsData = [
    {id: 1, fotoId: 1, cometn: "vsdvsdvd", cometnlikes: 2},
    {id: 1, fotoId: 1, cometn: "vsdvsdvd", cometnlikes: 2},
    {id: 1, fotoId: 1, cometn: "vsdvsdvd", cometnlikes: 2},
    {id: 1, fotoId: 1, cometn: "vsdvsdvd", cometnlikes: 2},
    {id: 1, fotoId: 1, cometn: "vsdvsdvd", cometnlikes: 2},
];
*/


/*const Cometn = () => {
    return (
            <div className="conteinerComent">
                <img className="ava" src={"./Ava/ava_"+CometnsData.id+".jpg"} alt=""/>
                <div className="comments">
                    {CometnsData.cometn}
                </div>
                <a href="#">
                    <div className="button">{CometnsData.cometnlikes}</div>
                </a>
            </div>
    )
}*/

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

const My_foto = (props) => {

    let FotoData = props.FotosData.FotosData.map(x => <Foto fotoId={x.fotoId} fotolikes={x.fotolikes}> </Foto>)
    /* let CometnData = CometnsData.map(x => <Cometn id={x.id} fotoId={x.fotoId} cometn={x.cometn} cometnlikes={x.cometnlikes} > </Cometn>)*/
    return (
        <div className='Conteiner'>
            {FotoData}

            {/*{CometnData}*/}


        </div>


    )
}
export default My_foto