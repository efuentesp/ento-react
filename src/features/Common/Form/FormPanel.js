import React, { PropTypes } from 'react';

const FormPanel = ({children, header}) => {

  return (
    <div className="ibox float-e-margins">
      <div className="ibox-title">
        <h5>{header}</h5>
        <div className="ibox-tools">
          <a className="collapse-link">
            <i className="fa fa-chevron-up" />
          </a>
        </div>
      </div>
      <div className="ibox-content">
        {children}
      </div>
    </div>
  );
};

FormPanel.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired
};

export default FormPanel;
