import { ItemListContainerStyled } from './ItemListContainer.styled';

const ItemListContainer = ({ greeting }) => {
  return (
    <ItemListContainerStyled>
      <h2>{greeting}</h2>
    </ItemListContainerStyled>
  );
};

export default ItemListContainer;
