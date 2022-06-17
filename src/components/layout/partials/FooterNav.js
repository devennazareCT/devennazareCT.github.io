import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="https://clevertap.com/contact-us/">Contact</Link>
        </li>
        <li>
          <Link to="https://clevertap.com/about-us/">About us</Link>
        </li>
        <li>
          <Link to="https://clevertap.com/messaging-channels/">FAQ's</Link>
        </li>
        <li>
          <Link to="https://clevertap.com/customers/">Customers</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;