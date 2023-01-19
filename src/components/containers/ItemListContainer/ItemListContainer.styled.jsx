import styled from 'styled-components';

export const ItemListContainerStyled = styled.div`
  & .productList {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media screen and (min-width: 768px) {
      gap: 1.5rem;
    }
  }
`;
