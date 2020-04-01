import React, { Component,  } from 'react';

export default class StoreCard extends Component {
    render() {
        const { store } = this.props;

        return (
            <div className="lg:w-1/3 md:w-1/2 w-full md:p-2 my-2">
                <div className="p-2 bg-gray-500">
                    <p className=""><strong>local: </strong>{store.name}</p>
                    <p><strong>dirección: </strong>{store.address}</p>
                    <p><strong>telefono: </strong>{store.phone}</p>
                </div>
            </div>
        )
    }
}