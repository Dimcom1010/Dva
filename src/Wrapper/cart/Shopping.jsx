import React from "react";
import style from "./CartStyle.module.css"


const Shopping = ({goodsInCartData, ...props}) => {

    let objectsInCart = goodsInCartData.filter(object => object.inCart === true)
    let summ = 0.00
    const summing = (id,name, cost) => {
        return (
            <div key={id} >

                <div className={style.shopping_items}>{name}</div>
                <div className={style.shopping_items}>{cost}</div>
                <div className={style.shopping_displey_none}>{summ=parseFloat(summ) + parseFloat(cost)}</div>

            </div>)

    }

    return <>

        <div className={style.block_pay}>
            <div>How you'll pay</div>

            {objectsInCart.map(u => summing(u.order_id,u.product_name, u.product_cost))}
            <div>Итого:</div>
            <div>USA {summ.toFixed(2)}</div>
            <div><button  className={style.button}>Оплатить</button></div>
        </div>
        </>


}
export default Shopping