import React from 'react';
import Button from './index';

const propTypes = {
  onClick: React.PropTypes.func,
};

const PrimaryButton = (props) => (
  <Button type="primary" onClick={props.onClick} />
);

PrimaryButton.propTypes = propTypes;
export default PrimaryButton;
