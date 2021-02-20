import styleShop from './ShopStyle.module.css'
import React, {useState} from "react";
import ShopEditing from "./ShopEditing";
import foto1 from '../../img/Foto_handmade/makrome_1.jpg'
import foto2 from '../../img/Foto_handmade/makrome_2.jpg'
import foto3 from '../../img/Foto_handmade/makrome_3.jpg'
import foto4 from '../../img/Foto_handmade/makrome_4.jpg'
import foto5 from '../../img/Foto_handmade/makrome_5.jpg'


const Shop = ({add_new_order, goodsInCartData, isAuth, ...props}) => {

    let order = {
        order_id: 7,
        shop_logo: "Logo1",
        shop_name: "aFewHomeTruths",
        product_foto: "Product Foto1",
        product_name: "Valentines Weirdo Mug",
        product_description: "This Weirdo Love mug says it how it is - I Love My Weirdo. It's a perfect alternative Valentines gift for him.",
        product_mony: "USD",
        product_cost: "777.00",
        inCart: true,
        product_quantity: 2,
    }
    let [editMode, setEditMode] = useState(false)

    return (<>
        {isAuth && <div>
            {!editMode
                ? <div className={styleShop.edit_menu}>
                    <div></div>
                    <div>
                        <button className={styleShop.button} onClick={() => setEditMode(true)}>Добавить изделие</button>
                    </div>
                </div>
                : <div className={styleShop.edit_menu}>
                    <ShopEditing/>
                    <div>
                        <button className={styleShop.button} onClick={() => {
                            setEditMode(false)
                        }}>Сохранить
                        </button>
                    </div>
                </div>
            }
        </div>
        }
        {goodsInCartData.map(u =>
            <div className={styleShop.shop_wrapper}>
                <div className={styleShop.shop_wraper_grid_body}>
                    <div className={styleShop.grid_items1}>
                        <div className={styleShop.block_foto_conteiner}>
                            <div className={styleShop.block_foto}><img alt="img" src={foto1}/></div>
                            <div className={styleShop.block_foto}><img alt="img" src={foto2}/></div>
                            <div className={styleShop.block_foto}><img alt="img" src={foto3}/></div>
                            <div className={styleShop.block_foto}><img alt="img" src={foto4}/></div>
                            <div className={styleShop.block_foto}><img alt="img" src={foto5}/></div>
                        </div>
                        <div className={styleShop.block_foto_big}><img alt="img" src={foto1}/></div>
                    </div>
                    <div className={styleShop.grid_items2}>
                        <div className={styleShop.shop_name}>{u.shop_name}</div>
                        <div className={styleShop.product_name}>{u.product_name}</div>
                        <div className={styleShop.purchase_block}>
                            <div className={styleShop.product_mony}>{u.product_mony}</div>
                            <div className={styleShop.product_cost}>{u.product_cost}</div>
                        </div>
                        <div>
                            <button className={styleShop.button} onClick={() => add_new_order(u.order_id)}> Добавить в казину
                            </button>
                        </div>
                        <div className={styleShop.higlights_item}>Higlights</div>
                        <div className={styleShop.higlights}>{u.higlights}</div>
                        <div className={styleShop.description_item}>Description</div>
                        <div className={styleShop.product_description}>{u.product_description}</div>
                    </div>
                    <div className={styleShop.grid_items3}>Coment</div>
                </div>
            </div>
        )}
    </>)
}
export default Shop