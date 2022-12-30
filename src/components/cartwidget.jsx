import styled from 'styled-components';
import Button from './button';
import Icon from '../icon';

const CartWidgetStyled = styled.div`
  position: relative;
  span {
    position: absolute;
    top: 0;
    right: 0;
    background: var(--red);
    color: var(--black);
    border-radius: 50%;
    inline-size: 1rem;
    block-size: 1rem;
    font-size: 0.75rem;
    text-align: center;
    line-height: 1.25;
  }
`;

function CartWidget() {
  return (
    <CartWidgetStyled>
      <Button
        className="transparent"
        icon={<Icon name="cart" size={24} color="var(--black)" />}
      />
      <span>2</span>
    </CartWidgetStyled>
  );
}

export default CartWidget;
