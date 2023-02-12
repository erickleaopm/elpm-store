import { Link } from 'react-router-dom'
import { capitalizeSentence } from '../../../utils/capitalizeSentence'

import { formatPrice } from '../../../utils/formatPrice'
import Button from '../../atoms/Button/Button.component'
import { CardProductStyled } from './CardProduct.styled'

const CardProduct = ({ id, title, description, image, price, category }) => {
  return (
    <CardProductStyled>
      <figure className='productImageContainer'>
        <img
          className='productImage'
          src={image}
          alt={title}
          height={217}
          width={313}
          loading='lazy'
        />
      </figure>
      <div className='productDetails'>
        <h3 className='productName'>
          <Link to={`/item/${id}`}>{title}</Link>
        </h3>
        {category && (
          <Link to={`/category/${category}`} className='productCategory'>
            {capitalizeSentence(category)}
          </Link>
        )}
        <div className='productPrice'>
          <span>{formatPrice(price)}</span>
        </div>
        <p className='productDescription'>{description}</p>
      </div>
      <div className='productActions'>
        <Button text='Comprar ahora' />
        <Button text='Agregar al carrito' className='secondary' />
      </div>
    </CardProductStyled>
  )
}

export default CardProduct
