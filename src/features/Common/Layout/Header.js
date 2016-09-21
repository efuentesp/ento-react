import React from 'react';
import { Link } from 'react-router';

const Header = () => {

  //const brand_logo = 'logo.png';
  //const brand_logo_collapsed = 'logo-single.png';

  return (
    <div className="row border-bottom">
      <nav className="navbar navbar-static-top" role="navigation">
        <div className="navbar-header">
          <Link className="navbar-minimalize minimalize-styl-2 btn btn-primary " to="/"><i className="fa fa-bars" /> </Link>
        </div>
        <ul className="nav navbar-top-links navbar-right">
          <li>
            <Link to="/">
              <i className="fa fa-search" />
            </Link>
          </li>
          <li>
            <Link to="/login">
              <i className="fa fa-power-off" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
