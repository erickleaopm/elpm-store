import { useState, useEffect } from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../../db/firebase-config'

function useProductList ({ category = null }) {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
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
    setProducts(docs)
    setLoading(false)
  }

  useEffect(() => {
    getProducts(category)
  }, [category])

  return { products, loading }
}

export default useProductList
