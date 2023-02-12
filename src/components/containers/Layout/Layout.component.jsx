import { LayoutStyled } from './Layout.styled'

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <div className='container'>{children}</div>
    </LayoutStyled>
  )
}

export default Layout
