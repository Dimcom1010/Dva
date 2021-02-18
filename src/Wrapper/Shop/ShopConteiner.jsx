import {connect} from "react-redux";

import {creating_new_order} from "../../Redux/cartComentReduser";
import Shop from "./Shop";

let mapStateToProps =(state)=>{
    return{
        goodsInCartData:state.cartComentReduser.goodsInCartData

    }
}


const ShopConteiner = connect (mapStateToProps,
    {
        creating_new_order,

    } )
(Shop);

export default ShopConteiner