import styled from 'styled-components';

export const CardProductStyled = styled.div`
  background: var(--white);
  max-inline-size: 20.5rem;
  padding: 1rem;

  .productImageContainer {
    margin: 0 0 1rem;
    inline-size: 313px;
    block-size: 217px;
    overflow: hidden;
    flex: 0 0 313px;
    & img {
      inline-size: 100%;
      block-size: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
  .productName,
  .productDescription {
    margin: 0 0 0.75rem;
  }
  .productActions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1 0 212px;
    justify-content: center;
  }
  .productPrice {
    display: flex;
    gap: 0.5rem;
    margin-block-end: 0.75rem;
    & span:nth-child(2n) {
      color: var(--primary);
      text-decoration: line-through;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 2rem;
    max-inline-size: 100%;

    .productImageContainer {
      margin: 0;
    }
  }
`;
