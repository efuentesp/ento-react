import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const SidebarSubMenu = ({route, title, localize}) => {

  return (
    <li className="">
        <Link to={route} title={title}>
          <span data-localize={localize}>{title}</span>
        </Link>
    </li>
  );
};

SidebarSubMenu.propTypes = {
  route: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  localize: PropTypes.string
};

export default SidebarSubMenu;
