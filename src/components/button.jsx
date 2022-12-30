import { isValidElement } from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background: var(--primary);
  color: var(--white);
  border: 1px solid var(--primary);
  padding-block: 0.25rem;
  font: var(--body-18regular);
  min-inline-size: 1.5rem;
  gap: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none !important;
  transition: 0.3s;
  &:hover {
    background: var(--white);
    color: var(--primary);
  }
  &.secondary {
    background: var(--white);
    color: var(--primary);
  }
  &.transparent {
    background: transparent;
    border: none;
  }
`;

const Button = ({
  text,
  link,
  className,
  icon,
  onClick,
  ariaExpanded,
  ariaControls,
}) => {
  const component = link ? 'a' : 'button';
  let IconComponent = null;

  if (icon) {
    if (isValidElement(icon)) {
      IconComponent = icon;
    }
  }
  return (
    <ButtonStyled
      as={component}
      href={link}
      className={className}
      onClick={onClick}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
    >
      {IconComponent}
      {text}
    </ButtonStyled>
  );
};

export default Button;
