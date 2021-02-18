import {connect} from "react-redux";
import Cart from "./Cart";
import {creating_new_order, delete_order, set_quantity_of_product} from "../../Redux/cartComentReduser";

let mapStateToProps =(state)=>{
    return{
        goodsInCartData:state.cartComentReduser.goodsInCartData

    }
}


const CartConteiner = connect (mapStateToProps, {creating_new_order,delete_order,set_quantity_of_product} )
(Cart);

export default CartConteiner