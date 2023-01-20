import { useState, useEffect } from 'react';

import Categories from '../../../mocks/categories';
import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button/Button.component';
import CartWidget from '../CartWidget/CartWidget.component';
import { NavbarStyled } from './Navbar.styled';
import { capitalizeSentence } from '../../../utils/capitalizeSentence';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setCategories(Categories);
  }, []);

  return (
    <NavbarStyled>
      <div className="container">
        <h1>
          <Link to="/">ELPM Store</Link>
        </h1>
        <div className="navigation">
          <nav role="navigation">
            <Button
              className="btn-menu transparent"
              icon={<Icon name="menu" size={24} color="var(--black)" />}
              onClick={handleClick}
              ariaExpanded={isMenuOpen}
              ariaControls="menu"
            />
            <ul id="menu" className={isMenuOpen ? 'is-active' : null}>
              {categories.map((category, index) => (
                <li key={`category-${index}`}>
                  <NavLink to={`/category/${category}`}>
                    {capitalizeSentence(category)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <CartWidget />
        </div>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
