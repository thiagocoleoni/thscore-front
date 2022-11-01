import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";

import '../../../styles/layout/_container.css';
import '../../../styles/layout/_datatable.css';

const DataTableLive = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://thscore-api.herokuapp.com/api/live")
      .then((res) => setPosts(res.data.response));
  }, []);

  const flagLeague = (rowData) => {
    if (rowData.flag_league) {
      return (
        <React.Fragment>
            <span className="image-text">
              <img src={`${rowData.flag_league}`} alt={rowData.flag_league} height="20px" />  {`${rowData.name_league}`}
            </span>
        </React.Fragment>
      );
    } else {
      return (
        <span className="image-text">
          {`${rowData.name_league}`}
        </span>
      );
    }
    
  };

  const logoHome = (rowData) => {
    return (
      <React.Fragment>
          <span className="image-text">
            <img src={`${rowData.logo_home}`} alt={rowData.logo_home} height="20px" />  {`${rowData.name_home}`}
          </span>
      </React.Fragment>
    );
  };

  const logoAway = (rowData) => {
    return (
      <React.Fragment>
          <span className="image-text">
          {`${rowData.name_away}`}  <img src={`${rowData.logo_away}`} alt={rowData.logo_away} height="20px" />
          </span>
      </React.Fragment>
    );
  };

  return (
    <DataTable
      value={posts}
      responsiveLayout="scroll"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      dataKey="status_elapsed"
      paginator
      emptyMessage="Nenhum jogo encontrado."
      className="datatable-responsive"
      currentPageReportTemplate="Exibindo de {first} a {last} de {totalRecords} registros"
      rows={10}
    >
      <Column header="Tempo" field="status_elapsed" sortable style={{ textAlign: 'center' }}></Column>
      <Column header="Campeonato" field="name_league" sortable body={flagLeague} style={{ textAlign: 'center' }}></Column>
      <Column header="Mandante" field="name_home" sortable body={logoHome}></Column>
      <Column header="" field="score_home" style={{ textAlign: 'center' }}></Column>
      <Column header="" field="score_away" style={{ textAlign: 'center' }}></Column>
      <Column header="Visitante" field="name_away" sortable body={logoAway} style={{ textAlign: 'right' }}></Column>
    </DataTable>
  );
};

export default DataTableLive;