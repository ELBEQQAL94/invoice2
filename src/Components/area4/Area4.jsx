import React, { Component } from 'react';
import InvoicesList from './InvoicesList.jsx';

class Area4 extends Component {
    render() {
        return (
        <>
            <h4>Invoices List for selected users</h4>
            <p className='sub_title'>Please type a partner name</p>
            <InvoicesList />
        </>
        );
    }
}

export default Area4;