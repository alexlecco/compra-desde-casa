import React, { Component,  } from 'react';

export default class StoreCard extends Component {
    render() {
        const { store } = this.props;

        return (
            <div className="p-2 storeCard">
                <p className=""><strong>local: </strong>{store.name}</p>
                <p><strong>dirección: </strong>{store.address}</p>
                <p><strong>telefono: </strong>{store.phone}</p>
            </div>
        )
    }
}