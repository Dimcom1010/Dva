import {connect} from "react-redux";
import Cart from "./Cart";
import {creating_new_order, delete_order} from "../../Redux/cartComentReduser";

let mapStateToProps =(state)=>{
    return{
        goodsInCartData:state.cartComentReduser.goodsInCartData

    }
}


const CartConteiner = connect (mapStateToProps, {creating_new_order,delete_order} )
(Cart);

export default CartConteiner