import React, { PropTypes } from 'react';

const Sidebar = ({children}) => {

  return (
    <nav className="navbar-default navbar-static-side" role="navigation">
      <div className="sidebar-collapse">
        <ul className="nav metismenu" id="side-menu">
          {children}
        </ul>
      </div>
    </nav>
  );
};

Sidebar.propTypes = {
  children: PropTypes.array.isRequired
};

export default Sidebar;
