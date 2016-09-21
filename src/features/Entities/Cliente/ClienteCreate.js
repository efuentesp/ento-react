import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';
import { toastr } from 'react-redux-toastr';

import ContentWrapper from "../../Common/Layout/ContentWrapper";
import PageHeader from "../../Common/Layout/PageHeader";
import FormPanel from '../../Common/Form/FormPanel';
import FormTextField from "../../Common/Form/FormTextField";
import { fetchCliente, createCliente } from './actions';

class ClienteCreate extends Component {

  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(props) {
    this.props.createCliente(props)
      .then(() => {
        this.context.router.push('/cliente_mgmnt');
        toastr.success("Cliente creado", `El Cliente fué creado exitosamente.`);
      });
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <div>
        <PageHeader title="Agregar Cliente">
          <ol className="breadcrumb">
             <li>
               <Link to="/">Inicio</Link>
             </li>
             <li className="active">Cliente</li>
             <li>
               <Link to="/cliente_mgmnt">Administrar Cliente</Link>
             </li>
             <li className="active"><strong>Agregar Cliente</strong></li>
          </ol>
        </PageHeader>
        <ContentWrapper>
          <FormPanel header="Cliente">
            <form
              role="form"
              onSubmit={handleSubmit(this.onFormSubmit)}>
              <Field
                name="numero"
                component={FormTextField}
                label="Número" />
              <Field
                name="nombre"
                component={FormTextField}
                label="Nombre" />
              <Field
                name="direccion"
                component={FormTextField}
                label="Dirección" />
              <ButtonToolbar>
                <Button
                  type="submit"
                  bsStyle="primary"
                  disabled={pristine || submitting}>
                    <i className={`${submitting ? 'fa fa-refresh fa-spin' : 'fa fa-save'}`} />
                    <span> Guardar</span>
                </Button>
              </ButtonToolbar>
            </form>
          </FormPanel>
        </ContentWrapper>
      </div>
    );
  }
}

ClienteCreate.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  createCliente: PropTypes.func.isRequired
};

ClienteCreate.contextTypes = {
  router: PropTypes.object.isRequired
};

const validate = values => {
  const errors = {};

  if (!values.numero) {
    errors.numero = 'Campo requerido.';
  }

  if (!values.nombre) {
    errors.nombre = 'Campo requerido.';
  }

  if (!values.direccion) {
    errors.direccion = 'Campo requerido.';
  }

  return errors;
};

function mapStateToProps(state) {
  return { cliente: state.cliente.item };
}

const form = reduxForm({
  form: 'ClienteCreateForm',
  validate
});

export default connect(mapStateToProps, { fetchCliente, createCliente })(form(ClienteCreate));
