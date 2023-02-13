import Menu from './menu'
import Cart from './cart'
import Cancel from './cancel'
import Plus from './plus'
import Minus from './minus'

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
    case 'plus': {
      return <Plus {...props} />
    }
    case 'minus': {
      return <Minus {...props} />
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
