import React, { Component, PropTypes } from 'react';

import Header from '../Common/Layout/Header';
import Sidebar from '../Common/Layout/Sidebar';
import NavHeader from '../Common/Layout/NavHeader';
import SidebarMenu from '../Common/Layout/SidebarMenu';
import SidebarSubMenu from '../Common/Layout/SidebarSubMenu';
import Footer from '../Common/Layout/Footer';

class App extends Component {
  render() {
    return(
      <div id="wrapper">
        <Sidebar>
          <NavHeader
            user_name="Edgar Fuentes (EFP)"
            user_role="Softtek AppDev" />
          <SidebarMenu
            title="Inicio"
            icon="fa fa-dashboard"
            route="/" />
          <SidebarMenu
            title="Clientes"
            icon="fa fa-briefcase"
            route="/">
            <SidebarSubMenu
              title="Administrar Cliente"
              route="/cliente_mgmnt" />
            <SidebarSubMenu
              title="Agregar Cliente"
              route="/cliente" />
          </SidebarMenu>
        </Sidebar>

        <div id="page-wrapper" className="gray-bg dashbard-1">
          <Header />
          {this.props.children}
          <Footer
            company_name="Softtek"
            initial_year="2016" />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
