import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'

import { db } from '../../../../db/firebase-config'
import { capitalizeSentence } from '../../../utils/capitalizeSentence'
import Icon from '../../atoms/Icon'
import Button from '../../atoms/Button/Button.component'
import CartWidget from '../CartWidget/CartWidget.component'
import { NavbarStyled } from './Navbar.styled'

const Navbar = () => {
  const [categories, setCategories] = useState([])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const productsCollectionRef = collection(db, 'categories')

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const getCategories = async () => {
    const querySnapshot = await getDocs(productsCollectionRef)
    const docs = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    })
    setCategories(docs.sort((a, b) => a.name.localeCompare(b.name)))
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <NavbarStyled>
      <div className='container'>
        <h1>
          <Link to='/'>ELPM Store</Link>
        </h1>
        <div className='navigation'>
          <nav role='navigation'>
            <Button
              className='btn-menu transparent'
              icon={<Icon name='menu' size={24} color='var(--black)' />}
              onClick={handleClick}
              ariaExpanded={isMenuOpen}
              ariaControls='menu'
            />
            {categories.length > 0 && (
              <ul id='menu' className={isMenuOpen ? 'is-active' : null}>
                {categories.map((category) => (
                  <li key={`category-${category.id}`}>
                    <NavLink to={`/category/${category.name}`}>
                      {capitalizeSentence(category.name)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </nav>
          <CartWidget />
        </div>
      </div>
    </NavbarStyled>
  )
}

export default Navbar
