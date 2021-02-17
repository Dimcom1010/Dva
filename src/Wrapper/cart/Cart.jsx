import React from "react";
import style from "./CartStyle.module.css"
import ElementCart from "./ElementCart";


const Cart = ({goodsInCartData, creating_new_order, delete_order, ...props}) => {
    debugger
    let order = {
        order_id: 3,
        shop_logo: "Logo1",
        shop_name: "Masik Company1",
        product_foto: "Product Foto1",
        product_name: "mirror made of yarn1",
        product_description: "11111111111111111111111!",
        product_quantity: 2,
        product_mony: "USD",
        product_cost: "777.00"
    }
    let isCart
    goodsInCartData.length? isCart =true: isCart=false

    return (
        <div className={style.wrapper_cart}>
            <div className={style.conteiner_cart}>
                <div className={style.titel_cart}>
                    <div>
                        <button onClick={() => creating_new_order(order)}> Добавить покупку</button>
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