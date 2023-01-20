import { useEffect, useState } from 'react';

import Products from '../../../mocks/products';
import CardProduct from '../../molecules/CardProduct/CardProduct.component';
import { ItemListContainerStyled } from './ItemListContainer.styled';

const ItemListContainer = ({ greeting, category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      setProducts(Products.filter((product) => product.category === category));
    } else {
      setProducts(Products);
    }
  }, [category]);

  return (
    <ItemListContainerStyled>
      <div className="container">
        <h2>{greeting}</h2>
        <div className="productList">
          {products.map((product) => (
            <CardProduct
              key={product.id}
              id={product.id}
              image={product.image}
              price={product.price}
              category={product.category}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </ItemListContainerStyled>
  );
};

export default ItemListContainer;
