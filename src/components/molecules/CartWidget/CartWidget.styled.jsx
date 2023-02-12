import styled from 'styled-components'

export const CartWidgetStyled = styled.div`
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
`
