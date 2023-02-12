import styled from 'styled-components'
import ItemListContainer from '../components/containers/ItemListContainer/ItemListContainer.component'

const HomeStyled = styled.div``

function Home () {
  return (
    <HomeStyled>
      <ItemListContainer greeting='Bienvenido a mi tienda' />
    </HomeStyled>
  )
}

export default Home
