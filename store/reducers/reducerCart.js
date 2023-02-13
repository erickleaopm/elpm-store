
import initialState from '../initialState'
import TYPES from './actionTypes'

export const reducerCart = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      return {
        ...state, cart: [...state.cart, action.payload]
      }
    }
    case TYPES.DELETE_PRODUCT_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload)
      }
    }
    case TYPES.DELETE_ALL_FROM_CART: {
      return {
        ...state,
        cart: initialState.cart,
        totalPrice: initialState.totalPrice
      }
    }
    case TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART: {
      return {
        ...state,
        totalPrice: state.cart.reduce((previousValue, product) => previousValue + product.price, 0)
      }
    }
    case TYPES.SET_PRODUCTS_LIST: {
      return {
        ...state,
        products: action.payload
      }
    }
    default:
      return state
  }
}
