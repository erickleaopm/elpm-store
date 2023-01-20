import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button(({ width }) => {
  return css`
    background: var(--primary);
    color: var(--white);
    border: 1px solid var(--primary);
    padding-block: 0.25rem;
    font: var(--body-18regular);
    min-inline-size: 1.5rem;
    gap: 0.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none !important;
    transition: 0.3s;
    width: ${width}px;
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
  `;
});
