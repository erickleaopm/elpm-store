import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'

import { db } from '../../../../db/firebase-config'
import { capitalizeSentence } from '../../../utils/capitalizeSentence'
import { formatPrice } from '../../../utils/formatPrice'
import Button from '../../atoms/Button/Button.component'
import { ItemDetailContainerStyled } from './ItemDetailContainer.styled'
import Loader from '../../atoms/Loader/Loader.component'
import NoProductFound from '../../molecules/Errors/NoProductFound/NoProductFound.component'

function ItemDetailContainer ({ productId: id, category = null }) {
  const [loading, setLoading] = useState(false)
  const [item, setItem] = useState(null)

  const getProduct = async (id) => {
    setLoading(true)
    const itemDocRef = doc(db, 'products', id)
    const itemDoc = await getDoc(itemDocRef)
    if (itemDoc.exists()) {
      setItem(itemDoc.data())
    } else {
      setItem({})
    }
    setLoading(false)
  }

  useEffect(() => {
    getProduct(id)
  }, [])

  return (
    loading
      ? <Loader />
      : item !== null && Object.keys(item).length > 0
        ? (
          <ItemDetailContainerStyled>
            <figure className='productImageContainer'>
              <img
                className='productImage'
                src={item.image.url}
                alt={item.image.alt}
                height={489}
                width={538}
                loading='lazy'
              />
            </figure>
            <div className='productDetails'>
              <h3 className='productName'>{item.title}</h3>
              <Link
                to={`/category/${item.category.name}`}
                className='productCategory'
              >
                {capitalizeSentence(item.category.name)}
              </Link>
              <div className='productPrice'>
                {item?.price ? <span>{formatPrice(item?.price)}</span> : null}
              </div>
              <p className='productDescription'>{item.description}</p>
              <div className='productActions'>
                <Button text='Comprar ahora' width={212} />
                <Button
                  text='Agregar al carrito'
                  className='secondary'
                  width={212}
                />
              </div>
            </div>
          </ItemDetailContainerStyled>
          )
        : !loading && <NoProductFound />
  )
}

export default ItemDetailContainer
