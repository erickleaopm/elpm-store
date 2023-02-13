import { useReducer } from 'react'
import CartContext from './CartContext'
import initialState from './initialState'
import TYPES from './reducers/actionTypes'
import { reducerCart } from './reducers/reducerCart'

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerCart, initialState)

  const addToCart = payload => dispatch({ type: TYPES.ADD_TO_CART, payload })
  const deleteProductFromCart = payload => dispatch({ type: TYPES.DELETE_PRODUCT_FROM_CART, payload })
  const deleteAllFromCart = payload => dispatch({ type: TYPES.DELETE_ALL_FROM_CART, payload })
  const calculateTotalPriceOfTheCart = payload => dispatch({ type: TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART, payload })
  const setProductsList = payload => dispatch({ type: TYPES.SET_PRODUCTS_LIST, payload })

  const store = {
    products: state.products,
    cart: state.cart,
    totalPrice: state.totalPrice,
    addToCart,
    deleteProductFromCart,
    deleteAllFromCart,
    calculateTotalPriceOfTheCart,
    setProductsList
  }

  return (
    <CartContext.Provider value={store}>
      {children}
    </CartContext.Provider>
  )
}
