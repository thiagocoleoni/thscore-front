import React from "react";

import { AppTopbar } from '../../layout/AppTopbar';
import { AppMenu } from '../../layout/AppMenu';
import {BrowserView, MobileView} from 'react-device-detect';

import '../../../node_modules/primereact/resources/themes/arya-blue/theme.css';
import '../../../node_modules/primeicons/primeicons.css';
import '../../styles/global.css';

const Home = () => {
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
              <div className="col-12">
                <div class="card">
                  <h2>TH Score</h2>
                  <p>
                    Este projeto tem o intuito de disponibilizar a melhor experiência para o trader.
                  </p>
                  <p>
                    Funcionalidades disponíveis:
                  </p>
                  <ul>
                    <li>Resultados de partidas ao vivo</li>
                    <li>Histórico de partidas para estudos </li>
                  </ul>
                  <br/>
                  <p>
                    Em breve novidades.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
   </div>
  );
}

export default Home;