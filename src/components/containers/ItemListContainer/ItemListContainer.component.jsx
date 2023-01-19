import { useEffect, useState } from 'react';

import Products from '../../../mocks/products';
import CardProduct from '../../molecules/CardProduct/CardProduct.component';
import { ItemListContainerStyled } from './ItemListContainer.styled';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <ItemListContainerStyled>
      <div className="container">
        <h2>{greeting}</h2>
        <div className="productList">
          {products.map((product) => (
            <CardProduct
              image={product.image}
              price={product.price}
              alternative_text={product.title}
              name={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </ItemListContainerStyled>
  );
};

export default ItemListContainer;
