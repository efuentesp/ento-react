import React, { PropTypes } from 'react';

const ContentWrapper = ({children}) => {

  return (
    <div className="wrapper wrapper-content animated fadeInRight">
        {children}
    </div>
  );
};

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default ContentWrapper;
