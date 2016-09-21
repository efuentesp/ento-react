import React, { PropTypes } from 'react';

const NavHeader = ({user_name, user_role}) => {

  return (
    <li className="nav-header">
        <div className="dropdown profile-element"> <span>
            <img alt="image" className="img-circle" src="efp_small.jpg" />
             </span>
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
            <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">{user_name}</strong>
            </span> <span className="text-muted text-xs block">{user_role} <b className="caret" /></span> </span> </a>
            <ul className="dropdown-menu animated fadeInRight m-t-xs">
                <li><a href="profile.html">Profile</a></li>
                <li><a href="contacts.html">Contacts</a></li>
                <li><a href="mailbox.html">Mailbox</a></li>
                <li className="divider" />
                <li><a href="login.html">Logout</a></li>
            </ul>
        </div>
        <div className="logo-element">
            IN+
        </div>
    </li>
  );
};

NavHeader.propTypes = {
  user_name: PropTypes.string.isRequired,
  user_role: PropTypes.string.isRequired
};

export default NavHeader;
