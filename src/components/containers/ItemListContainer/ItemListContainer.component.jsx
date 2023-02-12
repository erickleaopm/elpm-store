import useProductList from '../../../hooks/useProductList'
import Loader from '../../atoms/Loader/Loader.component'
import CardProduct from '../../molecules/CardProduct/CardProduct.component'
import EmptyProductList from '../../molecules/Errors/EmptyProductList/EmptyProductList.component'
import { ItemListContainerStyled } from './ItemListContainer.styled'

const ItemListContainer = ({ greeting, category = null }) => {
  const { products, loading } = useProductList({ category })

  return (
    <ItemListContainerStyled>
      <div className='container'>
        <h2>{greeting}</h2>
        <div className='productList'>
          {loading
            ? (
              <Loader />
              )
            : products.length === 0
              ? (
                <EmptyProductList />
                )
              : (
                  products.map((product) => (
                    <CardProduct
                      key={product.id}
                      id={product.id}
                      image={product.image.url}
                      price={product.price}
                      category={product.category.name}
                      title={product.title}
                      description={product.description}
                    />
                  ))
                )}
        </div>
      </div>
    </ItemListContainerStyled>
  )
}

export default ItemListContainer
