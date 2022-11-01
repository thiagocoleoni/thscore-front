import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';

export const AppBreadcrumb = ({ items }) => {
    const home = { icon: 'pi pi-home', url: '/' }
    const breadcrumbItems = items.map(function (item){
        return item;
    });

    return (
        <BreadCrumb model={breadcrumbItems} home={home} />
    );
}