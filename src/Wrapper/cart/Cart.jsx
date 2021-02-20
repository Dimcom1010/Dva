import React from "react";
import style from "./CartStyle.module.css"
import ElementCart from "./ElementCart";
import Shopping from "./Shopping";

const Cart = ({goodsInCartData, delete_order,set_quantity_of_product, ...props}) => {

    let objectsInCart =goodsInCartData.filter(object=>object.inCart===true)
    let isCart
    objectsInCart.length? isCart =true: isCart=false
    debugger

    return (
        <div className={style.wrapper_cart}>

            <div className={style.conteiner_cart}>

                <div className={style.titel_cart}>

                    <div>
                        <button onClick={() => set_quantity_of_product(2,10)}> ИЗМЕНИТЬ КОЛИЧЕСТВО</button>
                    </div>

                    {goodsInCartData.length
                        ? < div className={style.items_in_cart}>{objectsInCart.length} items in your cart</div>
                        : < div className={style.items_in_cart}>Карзина пуста</div>
                    }
                    <div></div>
                </div>
                <div className={style.wrapper_column_carts}>
                    <div className={style.elements_in_column}>
                        <ElementCart delete_order={delete_order} objectsInCart={objectsInCart}/>
                    </div>

                    <div className={style.cart_rigth_column}>
                        {isCart &&
                        <Shopping goodsInCartData={goodsInCartData}/>}
                    </div>
                </div>

            </div>

        </div>

    )
}
export default Cart