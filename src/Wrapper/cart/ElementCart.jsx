import style from "./CartStyle.module.css";
import React from "react";
import logo1 from "../../img/logo/logo_1.jpg";
import foto1 from "../../img/Foto_handmade/makrome_1.jpg";


const  ElementCart=({objectsInCart,delete_order}) =>{
    return (<>

        {objectsInCart.map (u =>
        <div className={style.cart_left_column}>
            <div className={style.user_contacts}>
                <div className={style.shop_logo}>
                    <div className={style.shop_photo}><img alt="img" src={logo1}/></div>
                    <div className={style.shop_name}>{u.shop_name}</div>
                </div>
                <div className={style.shop_contact}>Contact shop</div>
            </div>

            <div className={style.conteiner_info}>
                <div className={style.product_foto}><img alt="img" src={foto1}/></div>
                <div className={style.product_info_conteiner}>
                    <div className={style.product_name}>{u.product_name}</div>
                    <div className={style.product_description}>{u.product_description}</div>


                    <div className={style.product_deletion_of_cart}><button onClick={()=>delete_order(u.order_id)}> delete</button></div>
                </div>
                <div className={style.purchase_block}>
                    <div className={style.product_quantity}>
                        <select size="1"  name="hero[]">
                            <option disabled>шт.</option>
                            <option selected value="1">1</option>
                            <option  value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className={style.product_cost}>{u.product_mony} {u.product_cost}</div>
                </div>
            </div>
            <div className={style.gift_coupon_block}>
                <div className={style.gift}>This order is a gift
                    Prices will not be shown on packing slip
                </div>
                <div className={style.coupon}>Apply shop coupon codes</div>
            </div>
            <div className={style.communication_block}>
                <div className={style.add_note}>add a note to aFewHomeTruths (optional)</div>
                <div className={style.shipping_conteiner}>
                    <div className={style.shipping}>Shipping -USD 7.94 </div>
                    <div className={style.shipment}>Estimated delivery: 01-16 мар </div>
                    <div className={style.from}>from Великобритания</div>
                </div>
            </div>
        </div>
            )}
        </>)
}
export default ElementCart