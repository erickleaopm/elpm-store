import Menu from './menu'
import Cart from './cart'
import Cancel from './cancel'

function Index ({ name, ...props }) {
  switch (name) {
    case 'menu': {
      return <Menu {...props} />
    }
    case 'cart': {
      return <Cart {...props} />
    }
    case 'cancel': {
      return <Cancel {...props} />
    }
    default: {
      return null
    }
  }
}

Index.defaultProps = {
  size: 16,
  color: 'white'
}

export default Index
