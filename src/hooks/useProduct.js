import { useState, useEffect } from 'react'
import { collection, getDoc } from 'firebase/firestore'
import { db } from '../../db/firebase-config'

function useProductList ({ id }) {
  const [loading, setLoading] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({})
  const productsCollectionRef = collection(db, 'products', id)

  const getProduct = async () => {
    setLoading(true)
    const querySnapshot = await getDoc(productsCollectionRef)
    const docs = querySnapshot.doc.map((doc) => {
      console.log('doc', doc)
      return { id: doc.id, ...doc.data() }
    })
    setSelectedProduct(docs)
    setLoading(false)
  }

  useEffect(getProduct(), [])

  return { selectedProduct, loading }
}

export default useProductList
