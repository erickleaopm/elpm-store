import styled from 'styled-components'
import { formatPrice } from '../../../utils/formatPrice'
import CartInput from '../CartInput/CartInput.component'

const CardProductCartStyled = styled.div`
  background: var(--white);
  padding: 1rem;
  max-inline-size: 20.5rem;

  .productImageContainer {
    margin: 0 0 1rem;
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
  .productName {
    margin: 0 0 0.75rem;
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
  .productActions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-direction: column;
    flex: 1 0 212px;
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

const CardProductCart = ({ id, image, title, price, amount }) => {
  console.log('amount', amount)
  return (
    <CardProductCartStyled>
      <figure className='productImageContainer'>
        <img
          className='productImage'
          src={image?.url}
          alt={image?.alt || title}
          height={217}
          width={313}
          loading='lazy'
        />
      </figure>
      <div className='productDetails'>
        <h3 className='productName'>
          {title}
        </h3>
        <div className='productPrice'>
          <span>{formatPrice(price)}</span>
        </div>
        <div className='productActions'>
          <CartInput amount={amount} />
        </div>
      </div>
    </CardProductCartStyled>
  )
}

export default CardProductCart
