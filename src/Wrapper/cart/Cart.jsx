import React from "react";
import style from "./CartStyle.module.css"
import ElementCart from "./ElementCart";



const Cart = (props) => {
    debugger

    return (
        <div className={style.wrapper_cart}>
            <div className={style.conteiner_cart}>
                <div className={style.titel_cart}>
                    <div className={style.items_in_cart}>{"2"} items in your cart
                    </div>
                    <div className={style.keep_shopiing}>Keep shopping</div>
                </div>
                <div className={style.wrapper_column_carts}>
                    <div className={style.elements_in_column}>
                        <ElementCart/>
                        <ElementCart/>
                        <ElementCart/>
                    </div>
                    <div className={style.cart_rigth_column}>
                        <div className={style.block_pay}>How you'll pay</div>
                    </div>
                </div>

            </div>

        </div>

    )
}
export default Cart