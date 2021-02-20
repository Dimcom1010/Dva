import React from "react";
import styleShop from "./ShopStyle.module.css";

const ShopEditing = ({...props}) => {

    return (
        <div className={styleShop.shop_editor}>
            <div className={styleShop.shop_editor_body}>
                <div className={styleShop.shop_editor_items}>
                    <div  className={styleShop.shop_editor_item}>Название изделия</div>
                    <div><input placeholder={"Название изделия"} /></div>
                </div>
                <div  className={styleShop.shop_editor_items}>
                    <div>Основные моменты</div>
                    <div><input placeholder={"Основные моменты"}/></div>
                </div>
                <div  className={styleShop.shop_editor_items}>
                    <div>Описание</div>
                    <div><textarea placeholder={"Описание"}/></div>
                </div>
                <div  className={styleShop.shop_editor_items}>

                    <div>Цена</div>
                    <div>
                        <select size="1"  name="hero[]">
                            <option disabled>Валюта</option>
                            <option value="1">USD</option>
                            <option selected value="2">EUR</option>
                            <option value="3">RUB</option>
                            <option value="4">BYN</option>
                        </select>
                    </div>
                    <div><input  placeholder={"Цена"}/></div>
                </div>
            </div>
        </div>
    )
}
export default ShopEditing