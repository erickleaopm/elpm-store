import Icon from '../../atoms/Icon'
import Button from '../../atoms/Button/Button.component'
import { CartWidgetStyled } from './CartWidget.styled'
import { NavLink } from 'react-router-dom'

function CartWidget () {
  return (
    <CartWidgetStyled>
      <NavLink to='/checkout'>
        <Button
          className='transparent'
          icon={<Icon name='cart' size={24} color='var(--black)' />}
        />
        <span>2</span>
      </NavLink>
    </CartWidgetStyled>
  )
}

export default CartWidget
