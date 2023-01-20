import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Products from '../../../mocks/products';
import { capitalizeSentence } from '../../../utils/capitalizeSentence';
import { formatPrice } from '../../../utils/formatPrice';
import Button from '../../atoms/Button/Button.component';
import { ItemDetailContainerStyled } from './ItemDetailContainer.styled';

function ItemDetailContainer({ productId }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const selectedProduct = Products.find(
      (product) => product.id === parseInt(productId)
    );
    setProduct(selectedProduct);
  }, []);

  return (
    Object.keys(product).length && (
      <ItemDetailContainerStyled>
        <figure className="productImageContainer">
          <img
            className="productImage"
            src={product.image}
            alt={product.title}
            height={489}
            width={538}
            loading="lazy"
          />
        </figure>
        <div className="productDetails">
          <h3 className="productName">{product.title}</h3>
          <Link
            to={`/category/${product.category}`}
            className="productCategory"
          >
            {capitalizeSentence(product.category)}
          </Link>
          <div className="productPrice">
            {product?.price ? <span>{formatPrice(product?.price)}</span> : null}
          </div>
          <p className="productDescription">{product.description}</p>
          <div className="productActions">
            <Button text="Comprar ahora" width={212} />
            <Button
              text="Agregar al carrito"
              className="secondary"
              width={212}
            />
          </div>
        </div>
      </ItemDetailContainerStyled>
    )
  );
}

export default ItemDetailContainer;
