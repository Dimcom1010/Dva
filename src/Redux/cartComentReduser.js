const ADD_ORDER = 'ADD_ORDER'
const DELETE_ORDER = 'DELETE_ORDER'
const SET_QUANTITY_OF_PRODUCT = 'SET_QUANTITY_OF_PRODUCT'


let initialState = {
    goodsInCartData: [
        {
            order_id: 1,
            shop_logo: "1Logo",
            shop_name: "Masik Company",
            product_foto: "Product Foto",
            product_name: "mirror made of yarn",
            higlights:"Handmade ",
            product_description: "This Weirdo Love mug says it how it is - I Love My Weirdo. It's a perfect alternative Valentines gift for him. A perfect and romantic (if not a little bit naughty, rude and cheeky) way to tell the weirdo or geek in your life how special they are.This Weirdo Love mug says it how it is - I Love My Weirdo. It's a perfect alternative Valentines gift for him. A perfect and romantic (if not a little bit naughty, rude and cheeky) way to tell the weirdo or geek in your life how special they are.This Weirdo Love mug says it how it is - I Love My Weirdo. It's a perfect alternative Valentines gift for him. A perfect and romantic (if not a little bit naughty, rude and cheeky) way to tell the weirdo or geek in your life how special they are.This Weirdo Love mug says it how it is - I Love My Weirdo. It's a perfect alternative Valentines gift for him. A perfect and romantic (if not a little bit naughty, rude and cheeky) way to tell the weirdo or geek in your life how special they are.This Weirdo Love mug says it how it is - I Love My Weirdo. It's a perfect alternative Valentines gift for him. A perfect and romantic (if not a little bit naughty, rude and cheeky) way to tell the weirdo or geek in your life how special they are.",
            product_quantity: 1,
            product_mony: "USD",
            product_cost: "111.60",
            inCart: false,
        },
        {
            order_id: 2,
            shop_logo: "2Lo@@",
            shop_name: "Dima SHOP",
            product_foto: "My Foto",
            product_name: "My best prodyct",
            product_description: "Gooooood wery good, super and excellent goods!",
            higlights:"Handmade ",
            product_quantity: 1,
            product_mony: "USD",
            product_cost: "222.30",
            inCart: false,
        },
        {
            order_id: 3,
            shop_logo: "3Lo@@",
            shop_name: "Dima SHOP",
            product_foto: "My Foto",
            product_name: "My best prodyct",
            product_description: "Gooooood wery good, super and excellent goods!",
            higlights:"Handmade ",
            product_quantity: 1,
            product_mony: "USD",
            product_cost: "333.10",
            inCart: false,
        },
        {
            order_id: 4,
            shop_logo: "4Logo",
            shop_name: "Masik Company",
            product_foto: "Product Foto",
            product_name: "mirror made of yarn",
            product_description: "Gooooood wery good, super and excellent goods!",
            higlights:"Handmade ",
            product_quantity: 1,
            product_mony: "USD",
            product_cost: "444.50",
            inCart: false,
        },
        {
            order_id: 5,
            shop_logo: "5Lo@@",
            shop_name: "Dima SHOP",
            product_foto: "My Foto",
            product_name: "My best prodyct",
            product_description: "Gooooood wery good, super and excellent goods!",
            higlights:"Handmade ",
            product_quantity: 1,
            product_mony: "USD",
            product_cost: "555.70",
            inCart: false,
        },
        {
            order_id: 6,
            shop_logo: "6Lo@@",
            shop_name: "Dima SHOP",
            product_foto: "My Foto",
            product_name: "My best prodyct",
            product_description: "Gooooood wery good, super and excellent goods!",
            higlights:"Handmade ",
            product_quantity: 1,
            product_mony: "USD",
            product_cost: "666.30",
            inCart: false,
        }

    ]
}

export const cartComentReduser = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case ADD_ORDER: {
            debugger
            return {
                ...state,
                goodsInCartData: state.goodsInCartData.map(u => {
                    if (u.order_id === action.order_id)
                        return {...u, inCart: true}
                    return u
                })
            }
        }
        case DELETE_ORDER: {
            debugger
            return {
                ...state,
                goodsInCartData: state.goodsInCartData.map(u => {
                    if (u.order_id === action.order_id)
                        return {...u, inCart: false}
                    return u
                })
            }
        }
        case SET_QUANTITY_OF_PRODUCT: {
            debugger
            return {
                ...state,
                goodsInCartData: state.goodsInCartData.map(u => {
                    if (u.order_id === action.order_id)
                        return {...u, product_quantity: action.quantity}
                    return u
                })
            }
        }
/*       заготовка удаление товара из магазина
            case DELETE_ORDER: {
            const idx = state.goodsInCartData.findIndex((el) => el.order_id === action.order_id)
            state.goodsInCartData.splice(idx, 1)
            const newData = Object.assign(state.goodsInCartData)
            return {
                ...state,
                goodsInCartData: [...newData]
            }
        }*/

        default:                    /*Если ничго не пришло возвращаем просто state*/
            return state;
    }
}

export const add_new_order = (order_id) => ({type: ADD_ORDER, order_id})

export const delete_order = (order_id) => ({type: DELETE_ORDER, order_id})

export const set_quantity_of_product = (order_id, quantity) => ({type: SET_QUANTITY_OF_PRODUCT, order_id, quantity})

