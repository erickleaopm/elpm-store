import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'

import { db } from '../../../../db/firebase-config'
import { ItemDetailContainerStyled } from './ItemDetailContainer.styled'
import Loader from '../../atoms/Loader/Loader.component'
import NoProductFound from '../../molecules/Errors/NoProductFound/NoProductFound.component'
import CardProduct from '../../molecules/CardProduct/CardProduct.component'

function ItemDetailContainer ({ productId: id, category = null }) {
  const [loading, setLoading] = useState(false)
  const [item, setItem] = useState(null)

  const getProduct = async (id) => {
    setLoading(true)
    const itemDocRef = doc(db, 'products', id)
    const itemDoc = await getDoc(itemDocRef)
    if (itemDoc.exists()) {
      setItem({ id, ...itemDoc.data() })
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
            <CardProduct
              isDetail
              key={item.id}
              id={item.id}
              image={item.image}
              price={item.price}
              category={item.category.name}
              title={item.title}
              description={item.description}
            />
          </ItemDetailContainerStyled>
          )
        : !loading && <NoProductFound />
  )
}

export default ItemDetailContainer
