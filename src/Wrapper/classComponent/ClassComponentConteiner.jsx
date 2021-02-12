import {connect} from "react-redux";
import Calculator from "./ClassComponent";
import {minus, plus, sendQuestionnaire} from "../../Redux/classComponentReduser";





let mapStateToProps =(state)=>{
    return{
        foto:state.goodsInCart,

    }
}


const CalculatorConteiner = connect (mapStateToProps, {plus,minus,sendQuestionnaire})
(Calculator);

export default CalculatorConteiner