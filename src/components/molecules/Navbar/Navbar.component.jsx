import { useState } from 'react';
import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button/Button.component';
import CartWidget from '../CartWidget/CartWidget.component';
import { NavbarStyled } from './Navbar.styled';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarStyled>
      <h1>
        <a href="/">ELPM Store</a>
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
            <li>
              <a href="/productos">Productos</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/tienda">Tienda</a>
            </li>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
