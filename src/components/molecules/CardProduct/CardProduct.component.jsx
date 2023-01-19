import Button from '../../atoms/Button/Button.component';
import { CardProductStyled } from './CardProduct.styled';

const CardProduct = ({
  name,
  description,
  image,
  alternative_text,
  price,
  discount_price,
}) => {
  const formatPrice = (amount) => {
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  return (
    <CardProductStyled>
      <figure className="productImageContainer">
        <img
          className="productImage"
          src={image}
          alt={alternative_text}
          height={217}
          width={313}
        />
      </figure>
      <div className="productDetails">
        <h3 className="productName">{name}</h3>
        <div className="productPrice">
          {discount_price ? <span>{formatPrice(discount_price)}</span> : null}
          <span>{formatPrice(price)}</span>
        </div>
        <p className="productDescription">{description}</p>
      </div>
      <div className="productActions">
        <Button text="Comprar ahora" />
        <Button text="Agregar al carrito" className="secondary" />
      </div>
    </CardProductStyled>
  );
};

export default CardProduct;
