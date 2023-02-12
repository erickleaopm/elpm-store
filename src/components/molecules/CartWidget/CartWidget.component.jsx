import Icon from '../../atoms/Icon'
import Button from '../../atoms/Button/Button.component'
import { CartWidgetStyled } from './CartWidget.styled'

function CartWidget () {
  return (
    <CartWidgetStyled>
      <Button
        className='transparent'
        icon={<Icon name='cart' size={24} color='var(--black)' />}
      />
      <span>2</span>
    </CartWidgetStyled>
  )
}

export default CartWidget
