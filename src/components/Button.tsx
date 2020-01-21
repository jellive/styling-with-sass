import React from 'react';
import classNames from 'classnames'
import './Button.scss';

function Button({ children, size, color }: any) {
  return <button className={classNames('Button', size, color)}>{children}</button>;
}
Button.defaultProps = {
  size: 'medium',
  color: 'blue'
}

export default Button;