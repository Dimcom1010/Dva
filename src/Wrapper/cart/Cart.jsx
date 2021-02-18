import React from "react";
import style from "./CartStyle.module.css"
import ElementCart from "./ElementCart";







const Cart = ({goodsInCartData, creating_new_order, delete_order,set_quantity_of_product, ...props}) => {

    let isCart
    goodsInCartData.length? isCart =true: isCart=false

    return (
        <div className={style.wrapper_cart}>
            <div className={style.conteiner_cart}>

                <div className={style.titel_cart}>

                    <div>
                        <button onClick={() => set_quantity_of_product(2,10)}> ИЗМЕНИТЬ КОЛИЧЕСТВО</button>
                    </div>

                    {goodsInCartData.length
                        ? < div className={style.items_in_cart}>{goodsInCartData.length} items in your cart</div>
                        : < div className={style.items_in_cart}>Карзина пуста</div>
                    }
                    <div className={style.keep_shopiing}>Keep shopping</div>
                </div>
                <div className={style.wrapper_column_carts}>
                    <div className={style.elements_in_column}>
                        <ElementCart delete_order={delete_order} goodsInCartData={goodsInCartData}/>
                    </div>

                    <div className={style.cart_rigth_column}>
                        {isCart &&
                        <div className={style.block_pay}>How you'll pay</div>}
                    </div>
                </div>

            </div>

        </div>

    )
}
export default Cart