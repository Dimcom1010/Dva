import React from 'react';
import preloaderGif from '../../img/preloder.gif'


const Preloader = (props) => {

    return (
        <div>

            <img src={preloaderGif}/>


        </div>
    )
}
export default Preloader
/*const Preloader = (props) => {

    let StatusTrue = () => {
        props.preloderStatusTrue()
    }
    let StatusFalse = () => {
        props.preloderStatusFalse()
    }


    return (
        <div>

            {props.isPreloader ? <img src={preloaderGif}/> : null}


        </div>
    )
}
export default Preloader*/
