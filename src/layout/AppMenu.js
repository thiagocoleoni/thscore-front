import React, { Component } from 'react';
import { Menu } from 'primereact/menu';

import '../../src/styles/layout/_menu.css';

export class AppMenu extends Component {
    constructor(props) {
        super(props);

        this.items = [
            {
                label: 'Resultados',
                items: [
                    {
                        label: 'Ao Vivo',
                        icon: 'pi pi-calendar',
                        command: () => {
                            window.location.href = "/live"
                        }
                    },
                    {
                        label: 'Histórico',
                        icon: 'pi pi-history',
                        command: () => {
                            window.location.href = "/history"
                        }
                    }
                ]
            }
        ];
    }

    render() {
        return (
            <div className="layout-menu">
                <Menu model={this.items} />
            </div>
        );
    }
}