import React, { Component, Fragment } from 'react';
import StoreCard from './StoreCard';

export default class StoresList extends Component {
    render() {
        return (
            <Fragment>
                <StoreCard />
                <StoreCard />
                <StoreCard />
            </Fragment>
        )
    }
}