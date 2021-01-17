
import './MyFoto.css';
import MyFoto from "./MyFoto";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        FotosData:state.FotosDataReducers.FotosData1
    }
}

const   MyFotoContainer =  connect (mapStateToProps, null)(MyFoto)

export default MyFotoContainer

