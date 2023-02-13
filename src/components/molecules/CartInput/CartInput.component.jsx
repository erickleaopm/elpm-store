import styled from 'styled-components'
import Button from '../../atoms/Button/Button.component'
import Icon from '../../atoms/Icon'

const CartInputStyled = styled.div`
  display: flex;

  input[type=text] {
    font: var(--body-18semibold);
    border-radius: 0;
    border: 1px solid var(--primary);
    text-align: right;
    width: 3rem;
    padding: 0 .5rem;

    &:focus{
      border-radius: none;
    }
  }
`

const CartInput = ({ amount, setAmount }) => {
  const updateAmount = (remove) => {
    if (remove && (parseInt(amount) === 0)) {
      return
    }
    if (remove) {
      setAmount(prev => parseInt(prev - 1))
    } else {
      setAmount(prev => parseInt(prev + 1))
    }
  }

  const handleChange = (event) => {
    const newAmount = event.target.validity.valid ? event.target.value : amount
    setAmount(parseInt(newAmount))
  }

  return (
    <CartInputStyled>
      <Button icon={<Icon name='minus' size={20} color='var(--text)' />} onClick={() => updateAmount(true)} />
      <input type='text' name='amount' id='amount' pattern='[0-9]*' onInput={handleChange} value={amount} />
      <Button icon={<Icon name='plus' size={20} color='var(--text)' />} onClick={() => updateAmount(false)} />
    </CartInputStyled>
  )
}

export default CartInput
