const CREATING_NEW_ORDER = 'CREATING_NEW_ORDER'
const DELETE_ORDER='DELETE_ORDER'


let initialState = {
    goodsInCartData: [
        {
            order_id:1,
            shop_logo: "Logo",
            shop_name: "Masik Company",
            product_foto: "Product Foto",
            product_name: "mirror made of yarn",
            product_description: "Gooooood wery good, super and excellent goods!",
            product_quantity: 1,
            product_mony: "USD",
            product_cost: "120.00"
        },
        {
            order_id:2,
            shop_logo: "Lo@@",
            shop_name: "Dima SHOP",
            product_foto: "My Foto",
            product_name: "My best prodyct",
            product_description: "Gooooood wery good, super and excellent goods!",
            product_quantity: 1,
            product_mony: "USD",
            product_cost: "33.00"
        }

    ]
}

export const cartComentReduser = (state = initialState, action) => {
debugger
    switch (action.type) {
        case CREATING_NEW_ORDER: {
            return {
                ...state,
                goodsInCartData: [...state.goodsInCartData, action.new_order]

            }
        }
        case DELETE_ORDER: {
            debugger
            const idx = state.goodsInCartData.findIndex((el)=>el.order_id===action.order_id)
            state.goodsInCartData.splice(idx,1)
            const newData =Object.assign(state.goodsInCartData)
            debugger
            return {
                ...state,
                goodsInCartData: [...newData]

            }

        }

        default:                    /*Если ничго не пришло возвращаем просто state*/
            return state;
    }
}

export const creating_new_order = (new_order) => ({type: CREATING_NEW_ORDER, new_order})

export const delete_order = (order_id) => ({type: DELETE_ORDER, order_id})


