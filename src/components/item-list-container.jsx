import styled from 'styled-components';

const ItemListContainerStyled = styled.div``;

function ItemListContainer({ greeting }) {
  return (
    <ItemListContainerStyled>
      <h2>{greeting}</h2>
    </ItemListContainerStyled>
  );
}

export default ItemListContainer;
