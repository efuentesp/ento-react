import React from 'react';
import { Link } from 'react-router';
import { Col, Row } from 'react-bootstrap';

import ContentWrapper from "../../Common/Layout/ContentWrapper";
import PageHeader from "../../Common/Layout/PageHeader";
import FormPanel from '../../Common/Form/FormPanel';

import ClienteSearch from './ClienteSearch';
import ClienteList from './ClienteList';

const ClienteManagement = () => {
  return (
    <div>
      <PageHeader title="Administración de Cliente">
        <ol className="breadcrumb">
           <li>
             <Link to="/">Inicio</Link>
           </li>
           <li className="active">Cliente</li>
           <li className="active"><strong>Administrar Cliente</strong></li>
        </ol>
      </PageHeader>
      <ContentWrapper>
        <FormPanel header="Cliente registrados">
          <Row>
            <Col sm={12}>
              <ClienteSearch />
              <br />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Link className="btn btn-info" to="/cliente">
                <em className="fa fa-plus" />
              </Link>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <ClienteList />
            </Col>
          </Row>
        </FormPanel>
      </ContentWrapper>
    </div>
  );
};

export default ClienteManagement;
