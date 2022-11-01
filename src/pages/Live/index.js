import React from "react";

import { AppTopbar } from '../../layout/AppTopbar';
import { AppMenu } from '../../layout/AppMenu';
import { AppBreadcrumb } from '../../layout/AppBreadcrumb';
import {BrowserView, MobileView} from 'react-device-detect';
import DataTableLive from '../../pages/Live/components/Datatable';

import '../../../node_modules/primereact/resources/themes/arya-blue/theme.css';
import '../../../node_modules/primeicons/primeicons.css';
import '../../styles/global.css';

import '../../../node_modules/primereact/sidebar/sidebar.min.css';

const Live = () => { 
  const items = [
    {label: 'Home', url: '/'},
    {label: 'Live', url: '/live'}
  ];

  return (
    <div className="layout-wrapper layout-theme-dark layout-static p-ripple-disabled">
        <AppTopbar/>
         <BrowserView>
            <div className="layout-sidebar">
                <AppMenu />
            </div>
          </BrowserView>
          <MobileView>
            <div className="col-12">
              <AppBreadcrumb items={items} />
            </div> 
          </MobileView>
        <div className="layout-main-container">
            <div className="layout-main">
              <div className="grid">
                <div class="card">
                  <h2>Ao vivo</h2>
                  <DataTableLive/>
                </div>
              </div>
            </div>
        </div>
        <div className="layout-mask"></div>
    </div>
  );
}

export default Live;