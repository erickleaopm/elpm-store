import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../../atoms/Button/Button.component'

import Icon from '../../../atoms/Icon'

const PageNotFoundStyled = styled.div`
  background: var(--white);
  inline-size: 100%;
  max-inline-size: 600px;
  min-block-size: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-block-start: 2rem;
  padding: 2rem;
  & > h1 {
    font: var(--subtitles-32bold);
    color: var(--subtextcolor);
    text-align: center;
  }
`

const PageNotFound = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <PageNotFoundStyled>
      <Icon name='cancel' size={75} color='var(--red)' />
      <h1>Opss! La página que buscas no existe.</h1>
      <Button text='Regresar' onClick={handleBack} />
    </PageNotFoundStyled>
  )
}

export default PageNotFound
