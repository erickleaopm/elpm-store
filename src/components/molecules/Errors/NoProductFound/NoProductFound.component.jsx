import React from 'react'
import styled from 'styled-components'

import Icon from '../../../atoms/Icon'

const NoProductFoundStyled = styled.div`
  background: var(--white);
  inline-size: 500px;
  block-size: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-block-start: 2rem;
  & > h2 {
    font: var(--subtitles-22bold);
    color: var(--subtextcolor);
  }
`

const NoProductFound = () => {
  return (
    <NoProductFoundStyled>
      <Icon name='cart' size={50} color='var(--text)' />
      <h2>El producto no existe</h2>
    </NoProductFoundStyled>
  )
}

export default NoProductFound
