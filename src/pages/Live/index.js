import React from "react";

import { AppTopbar } from '../../layout/AppTopbar';
import { AppMenu } from '../../layout/AppMenu';
import {BrowserView, MobileView} from 'react-device-detect';
import DataTableLive from '../../pages/Live/components/Datatable';

import '../../../node_modules/primereact/resources/themes/arya-blue/theme.css';
import '../../../node_modules/primeicons/primeicons.css';
import '../../styles/global.css';

import '../../../node_modules/primereact/sidebar/sidebar.min.css';

const Live = () => {  
  return (
    <div className="layout-wrapper layout-theme-dark layout-static p-ripple-disabled">
        <AppTopbar/>
         <BrowserView>
            <div className="layout-sidebar">
                <AppMenu />
            </div>
          </BrowserView>
          <MobileView>
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