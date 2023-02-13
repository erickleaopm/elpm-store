import TYPES from './actionTypes'

export const addToCart = payload => ({ type: TYPES.ADD_TO_CART, payload })
export const deleteProductFromCart = payload => ({ type: TYPES.DELETE_PRODUCT_FROM_CART, payload })
export const deleteAllFromCart = payload => ({ type: TYPES.DELETE_ALL_FROM_CART, payload })
export const calculateTotalPriceOfTheCart = payload => ({ type: TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART, payload })
export const setProductsList = payload => ({ type: TYPES.SET_PRODUCTS_LIST, payload })
