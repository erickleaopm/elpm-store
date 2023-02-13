import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import CartContext from '../../../../store/CartContext'
import Icon from '../../atoms/Icon'
import Button from '../../atoms/Button/Button.component'
import { CartWidgetStyled } from './CartWidget.styled'

function CartWidget () {
  const { cart } = useContext(CartContext)
  const totalItems = () => {
    return cart.reduce((acc, obj) => { return acc + obj.amount }, 0)
  }
  return (
    <CartWidgetStyled>
      <NavLink to='/checkout'>
        <Button
          className='transparent'
          icon={<Icon name='cart' size={24} color='var(--black)' />}
        />
        <span>{totalItems()}</span>
      </NavLink>
    </CartWidgetStyled>
  )
}

export default CartWidget
