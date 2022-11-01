import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-thscore-branco.png";
import { Dialog } from 'primereact/dialog';

import '../../src/styles/layout/_dialog.css';
import '../../src/styles/layout/_topbar.css';

export class AppTopbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayBasic: false,
            position: 'center'
        };

        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }

    onClick(name, position) {
        let state = {
            [`${name}`]: true
        };

        if (position) {
            state = {
                ...state,
                position
            }
        }

        this.setState(state);
    }

    onHide(name) {
        this.setState({
            [`${name}`]: false
        });
    }

    render() {
        return (
            <div className="layout-topbar">

                <Link to="/">
                    <div className="layout-topbar-logo">
                        <img src={ Logo } width="120px" alt="logo" />
                    </div>
                </Link>

                <div className="layout-topbar-menu">
                    <button type="button" className="p-link layout-topbar-button" onClick={() => this.onClick('displayBasic')}>
                        <i className="pi pi-user"></i>
                        <span>Usuário</span>
                    </button>
                </div>

                <Dialog header="Aguarde" visible={this.state.displayBasic} style={{ width: '50vw' }} onHide={() => this.onHide('displayBasic')}>
                    <p>Em breve teremos novidades.</p>
                </Dialog>
            </div>
            
        );
    }
}