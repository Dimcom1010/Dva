import style from './ShopStyle.module.css'
import React from "react";
import {NavLink} from "react-router-dom";


const Shop =({creating_new_order, ...props})=>{
    let order = {
        order_id: 3,
        shop_logo: "Logo1",
        shop_name: "aFewHomeTruths",
        product_foto: "Product Foto1",
        product_name: "Valentines Weirdo Mug",
        product_description: "This Weirdo Love mug says it how it is - I Love My Weirdo. It's a perfect alternative Valentines gift for him.",
        product_mony: "USD",
        product_cost: "777.00",

        product_quantity: 2,
    }
    return (
        <div className={style.shop_wrapper}>




           <div >
                <button onClick={() => creating_new_order(order)}> Добавить покупку</button>
            </div>
            <NavLink to='/Cart'>
                <div className="navBar_Item">Cart</div>
            </NavLink>

        </div>
    )
}
export default Shop