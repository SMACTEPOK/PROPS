import React from 'react';
import PropTypes from 'prop-types';

export function Card({ children, variant = 'primary', size = 'medium', shadow = true, border = true }) {
  const classes = [
    'ui-card',
    `ui-card--${variant}`,
    `ui-card--${size}`,
    shadow ? 'ui-card--shadow' : '',
    border ? 'ui-card--border' : ''
  ].filter(Boolean).join(' ');

  return <div className={classes}>{children}</div>;
}

Card.Header = function CardHeader({ children }) { return <div className="ui-card__header">{children}</div>; };
Card.Body = function CardBody({ children }) { return <div className="ui-card__body">{children}</div>; };
Card.Footer = function CardFooter({ children }) { return <div className="ui-card__footer">{children}</div>; };

Card.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  shadow: PropTypes.bool,
  border: PropTypes.bool,
};
