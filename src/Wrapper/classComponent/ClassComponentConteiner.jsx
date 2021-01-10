import {connect} from "react-redux";
import ClassComponent from "./ClassComponent";
import {minus, plus, sendQuestionnaire} from "../../Redux/classComponentReduser";





let mapStateToProps =(state)=>{
    return{
        foto:state.classComponent.foto,
        status:state.classComponent.status,
        itog:state.classComponent.itog
    }
}


const ClassComponentConteiner = connect (mapStateToProps, {plus,minus,sendQuestionnaire})(ClassComponent);

export default ClassComponentConteiner