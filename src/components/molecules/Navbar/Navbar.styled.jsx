import styled from 'styled-components';

export const NavbarStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background: var(--white);
  h1 {
    margin: 0;
  }
  ul {
    display: none;
    list-style: none;
    padding: 0;
    margin: 0;
    position: fixed;
    top: 51px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: var(--subtextcolor);
    &.is-active {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      padding-block-start: 2rem;
    }
  }
  .btn-menu {
    position: relative;
    z-index: 2;
  }
  a {
    color: var(--greytext);
    font: var(--body-18regular);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .navigation {
    display: flex;
    gap: 1rem;
  }
  @media screen and (min-width: 768px) {
    .btn-menu {
      display: none;
    }
    ul {
      position: static;
      background: transparent;
      display: flex;
      gap: 3rem;
    }
  }
`;
