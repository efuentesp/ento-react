import React, { PropTypes } from 'react';
import { Col } from 'react-bootstrap';

const PageHeader = ({children, title}) => {

  return (
    <div className="row wrapper border-bottom white-bg page-heading">
      <Col lg={10}>
        <h2>{title}</h2>
        {children}
      </Col>
      <Col lg={2} />
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object
};

export default PageHeader;
