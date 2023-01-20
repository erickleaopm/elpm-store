import styled from 'styled-components';

export const ItemDetailContainerStyled = styled.div`
  background: var(--white);
  padding: 1rem;
  margin-block-start: 2.5rem;

  .productImageContainer {
    margin: 0 auto 2rem;
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
  .productName {
    font: var(--subtitles-32bold);
    & > a {
      color: var(--text);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
      &:visited {
        color: var(--text);
      }
    }
  }
  .productDescription {
    font: var(--body-18regular);
    line-height: 1.5rem;
    color: var(--black);
    margin-block-end: 1.5rem;
  }
  .productCategory {
    display: inline-block;
    text-decoration: none;
    font: var(--body-18semibold);
    color: var(--primary);
    margin-block-end: 0.75rem;
    &:hover {
      text-decoration: underline;
    }
  }
  .productActions {
    display: flex;
    gap: 1rem;
  }
  .productPrice {
    display: flex;
    gap: 0.5rem;
    margin-block-end: 0.75rem;
    font: var(--subtitles-22bold);
    color: var(--text);
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
      inline-size: 538px;
      block-size: 489px;
      flex: 0 0 538px;
    }
  }
`;
