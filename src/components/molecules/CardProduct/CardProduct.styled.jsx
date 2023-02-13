import styled, { css } from 'styled-components'

export const CardProductStyled = styled.div(({ isDetail = false }) => css`
  background: var(--white);
  padding: 1rem;
  ${isDetail ? 'margin-block-start: 2.5rem;' : 'max-inline-size: 20.5rem;'}

  .button {
    background: var(--primary);
    color: var(--white);
    border: 1px solid var(--primary);
    padding-block: 0.25rem;
    font: var(--body-18regular);
    min-inline-size: 1.5rem;
    inline-size: 100%;
    max-inline-size: 15rem;
    gap: 0.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none !important;
    transition: 0.3s;
    &:hover {
      background: var(--white);
      color: var(--primary);
    }
    &.secondary {
      background: var(--white);
      color: var(--primary);
    }
    &.transparent {
      background: transparent;
      border: none;
    }
  }

  .productImageContainer {
    ${isDetail ? 'margin: 0 auto 2rem;' : 'margin: 0 0 1rem;'}
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
    &.list {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  .productActions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-direction: column;
    flex: 1 0 212px;
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
      &.details {
        inline-size: 538px;
        block-size: 489px;
        flex: 0 0 538px;
      }
    }

    .productActions {
      justify-content: flex-start;
    }
  }
`
)
