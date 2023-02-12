import React from 'react';
import styled from 'styled-components';

import Icon from '../../../atoms/Icon';

const EmptyProductListStyled = styled.div`
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
    color: var(--text);
  }
`;

function EmptyProductList() {
  return (
    <EmptyProductListStyled>
      <Icon name="cart" size={50} color="var(--text)" />
      <h2>No products available</h2>
    </EmptyProductListStyled>
  );
}

export default EmptyProductList;
