import React, { Component, Fragment } from 'react';

export default class StoreCard extends Component {
    render() {
        const { store } = this.props;

        return (
            <Fragment>
                <p>local: {store.name}</p>
                <p>dirección: {store.address}</p>
                <p>telefono: {store.phone}</p>
            </Fragment>
        )
    }
}