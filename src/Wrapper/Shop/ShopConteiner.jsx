import {connect} from "react-redux";


import Shop from "./Shop";
import {add_new_order} from "../../Redux/cartComentReduser";

let mapStateToProps =(state)=>{
    return{
        goodsInCartData:state.cartComentReduser.goodsInCartData,
        isAuth: state.auth.isAuth
    }
}


const ShopConteiner = connect (mapStateToProps,
    {
        add_new_order,


    } )
(Shop);

export default ShopConteiner