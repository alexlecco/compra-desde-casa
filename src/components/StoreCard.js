import React, { Component,  } from 'react';

export default class StoreCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCollapsed: true
        }
    }

    changeCollapsed() {
        this.setState({isCollapsed: !this.state.isCollapsed})
    }

    render() {
        const { store } = this.props;
        const creditText = store.acceptCredit ? "acepta" : "no acepta";
        const debitText = store.acceptDebit ? "acepta" : "no acepta";
        const changeCollapsed = () => this.changeCollapsed();

        return (
            <div className="lg:w-1/3 md:w-1/2 w-full md:p-2 my-2 cursor-pointer" onClick={changeCollapsed}>
                <div className="p-2 bg-gray-500">
                    <p><strong>local: </strong>{store.name}</p>
                    <p><strong>dirección: </strong>{store.address}</p>
                    <p><strong>celular: </strong>{store.cellphone}</p>
                    {
                        this.state.isCollapsed ?
                            <div /> :
                            <div>
                                <p><strong>fijo: </strong>{store.phone}</p>
                                <p><strong>atención: </strong>{store.openingHours}</p>
                                <p><strong>tarjetas de credito: </strong>{creditText}</p>
                                <p><strong>tarjetas de debito: </strong>{debitText}</p>
                            </div>
                    }
                </div>
            </div>
        )
    }
}