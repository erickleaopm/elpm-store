import { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import CartContext from '../../../../store/CartContext'
import { capitalizeSentence } from '../../../utils/capitalizeSentence'

import { formatPrice } from '../../../utils/formatPrice'
import Button from '../../atoms/Button/Button.component'
import CartInput from '../CartInput/CartInput.component'
import { CardProductStyled } from './CardProduct.styled'

const CardProduct = ({ id, title, description, image, price, category, isDetail = false }) => {
  const { addToCart } = useContext(CartContext)
  const [amount, setAmount] = useState(0)
  const [isAdding, setIsAdding] = useState(true)
  const navigate = useNavigate()

  const handleAddToCart = () => {
    addToCart({
      id,
      image,
      title,
      amount,
      price
    })
    setIsAdding(false)
  }

  const goToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <CardProductStyled isDetail>
      <figure className={`${isDetail && 'details'} productImageContainer`}>
        <img
          className='productImage'
          src={image?.url}
          alt={image?.alt || title}
          height={isDetail ? 489 : 217}
          width={isDetail ? 538 : 313}
          loading='lazy'
        />
      </figure>
      <div className='productDetails'>
        <h3 className='productName'>
          {isDetail ? title : <Link to={`/item/${id}`}>{title}</Link>}
        </h3>
        {category && (
          <Link to={`/category/${category}`} className='productCategory'>
            {capitalizeSentence(category)}
          </Link>
        )}
        <div className='productPrice'>
          <span>{formatPrice(price)}</span>
        </div>
        <p className={`${!isDetail && 'list'} productDescription`}>{description}</p>
        <div className='productActions'>
          {isDetail
            ? isAdding
              ? (
                <>
                  <CartInput amount={amount} setAmount={setAmount} />
                  <Button text='Agregar al carrito' className='secondary' width={212} onClick={handleAddToCart} />
                </>)
              : (<Button text='Ir al Checkout' width={212} onClick={goToCheckout} />)
            : <NavLink className='button' to={`/item/${id}`}>Ver Detalle</NavLink>}
        </div>
      </div>
    </CardProductStyled>
  )
}

export default CardProduct
