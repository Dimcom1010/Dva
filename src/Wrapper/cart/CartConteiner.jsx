import {connect} from "react-redux";
import Cart from "./Cart";
import { delete_order, set_quantity_of_product} from "../../Redux/cartComentReduser";

let mapStateToProps =(state)=>{
    return{
        goodsInCartData:state.cartComentReduser.goodsInCartData

    }
}


const CartConteiner = connect (mapStateToProps,
    {delete_order,
        set_quantity_of_product} )
(Cart);

export default CartConteiner