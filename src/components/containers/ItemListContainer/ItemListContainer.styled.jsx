import styled from 'styled-components'

export const ItemListContainerStyled = styled.div`
  h2 {
    font: var(--subtitles-22bold);
    color: var(--subtextcolor);
    margin: 2.5rem 0 1rem;
    & > span {
      color: var(--primary);
    }
  }

  & .productList {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media screen and (min-width: 768px) {
      gap: 1.5rem;
    }
  }
`
