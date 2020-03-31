import React, { Component, Fragment } from 'react';
import StoreCard from './StoreCard';

export default class StoresList extends Component {
    render() {
        const { stores } = this.props;

        return (
            <Fragment>
                { stores.map(store => <StoreCard store={store} key={store.id} />) }
            </Fragment>
        )
    }
}