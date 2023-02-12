import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ItemListContainer from '../components/containers/ItemListContainer/ItemListContainer.component'
import { capitalizeSentence } from '../utils/capitalizeSentence'

const CategoryStyled = styled.div``

function Category () {
  const { categoryId } = useParams()

  const greeting = (
    <>
      Category: <span>{capitalizeSentence(categoryId)}</span>
    </>
  )

  return (
    <CategoryStyled>
      <ItemListContainer category={categoryId} greeting={greeting} />
    </CategoryStyled>
  )
}

export default Category
