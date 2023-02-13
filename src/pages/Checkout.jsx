import { useContext } from 'react'
import styled from 'styled-components'
import CartContext from '../../store/CartContext'
import CardProductCart from '../components/molecules/CardProductCart/CardProductCart.component'
import EmptyProductList from '../components/molecules/Errors/EmptyProductList/EmptyProductList.component'

const CheckoutStyled = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 2rem 0 0;
    padding: 0;
  }
`

const Checkout = () => {
  const { cart } = useContext(CartContext)
  return (
    <CheckoutStyled>
      <div className='container'>
        <h2>Checkout</h2>
        {cart.length === 0
          ? <EmptyProductList />
          : (
            <ul>
              {cart.map(item => (
                <CardProductCart
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  title={item.title}
                  amount={item.amount}
                />
              ))}
            </ul>)}
      </div>
    </CheckoutStyled>
  )
}

export default Checkout
