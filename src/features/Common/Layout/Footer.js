import React, { PropTypes } from 'react';

const Footer = ({company_name, initial_year}) => {

  return (
    <div className="footer">
        <div className="pull-right" />
        <div>
            <strong>Copyright</strong> {company_name} &copy; {initial_year}
        </div>
    </div>
  );
};

Footer.propTypes = {
  company_name: PropTypes.string.isRequired,
  initial_year: PropTypes.string.isRequired
};

export default Footer;
