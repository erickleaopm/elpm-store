import styled from 'styled-components'

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
    color: var(--subtextcolor);
    margin-block-end: 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .productActions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1 0 212px;
    justify-content: center;
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
    }
  }
`
