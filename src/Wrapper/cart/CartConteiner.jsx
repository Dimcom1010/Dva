import React from "react";
import {connect} from "react-redux";
import Cart from "./Cart";





let mapStateToProps =(state)=>{
    return{
        goodsInCartData:state.cartComentReduser.goodsInCartData

    }
}


const CartConteiner = connect (mapStateToProps, null)
(Cart);

export default CartConteiner