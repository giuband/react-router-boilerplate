import React from 'react';
require('../../stylesheet/components/Buttons.scss');

const propTypes = {
  type: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

const getButtonClass = (type) => {
  switch (type) {
    case 'primary':
      return 'btn-primary';
    case 'secondary':
      return 'btn-secondary';
    default:
      return 'btn-default';
  }
};

const Button = (props) => {
  const buttonClass = getButtonClass(props.type);
  return (
    <btn className={buttonClass} onClick={props.onClick}>Ciao</btn>
  );
};

Button.propTypes = propTypes;
export default Button;
