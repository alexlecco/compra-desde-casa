import React, { Component } from 'react';
import StoreCard from './StoreCard';

export default class StoresList extends Component {
    render() {
        const { stores } = this.props;

        return (
            <div className="flex flex-wrap">
                { stores.map(store => <StoreCard className="p-2" store={store} key={store.id} />) }
            </div>
        )
    }
}