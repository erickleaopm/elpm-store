import { useState, useEffect, useContext } from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../../db/firebase-config'
import CartContext from '../../store/CartContext'

function useProductList ({ category = null }) {
  const { setProductsList } = useContext(CartContext)
  const [loading, setLoading] = useState(false)
  const productsCollectionRef = collection(db, 'products')

  const getProducts = async () => {
    setLoading(true)
    let q
    if (category) {
      q = query(productsCollectionRef, where('category.name', '==', category))
    }
    const querySnapshot = category
      ? await getDocs(q)
      : await getDocs(productsCollectionRef)
    const docs = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    })
    setProductsList(docs)
    setLoading(false)
  }

  useEffect(() => {
    getProducts(category)
  }, [category])

  return { loading, getProducts }
}

export default useProductList
