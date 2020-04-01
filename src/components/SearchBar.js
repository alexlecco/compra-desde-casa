import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let currentStores = [];
        let newStores = [];
        let term = e.target.value;
    
        if (term !== '' && term.length > 2) {
            currentStores = this.props.stores;
            newStores = currentStores.filter(item => {
                const lc = item.name.toLowerCase();
                const filter = term.toLowerCase();
                return lc.includes(filter);
            });
        } else {
            newStores = this.props.stores;
        }
        
        this.props.updateList(newStores, term)
    }

    render() {
        return (
            <div className="md:p-2">
                <p> Buscá comercios </p>
                <input 
                    type="text"
                    placeholder="almacenes, farmacias y mas..."
                    className="search-input p-2 w-full"
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}