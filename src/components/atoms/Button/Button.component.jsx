import { isValidElement } from 'react';
import { ButtonStyled } from './Button.styled';

const Button = ({
  text,
  link,
  className,
  icon,
  onClick,
  ariaExpanded,
  ariaControls,
  width,
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
      width={width}
    >
      {IconComponent}
      {text}
    </ButtonStyled>
  );
};

export default Button;
