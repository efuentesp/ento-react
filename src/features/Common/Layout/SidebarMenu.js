import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const SidebarMenu = ({children, title, icon, route}) => {

  return (
    <li>
        <Link to={route}><i className={icon} /> <span className="nav-label">{title}</span></Link>
        <ul className="nav nav-second-level">
          {children}
        </ul>
    </li>
  );
};

SidebarMenu.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
};

export default SidebarMenu;
