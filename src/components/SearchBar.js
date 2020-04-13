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
            <div className="md:p-2 lg:flex">
                <div className="lg:w-2/3">
                    <div className="lg:w-full lg:flex">
                        <button className="bg-white text-black px-5 py-2 mx-1 my-2 text-sm w-1/6">categoria 1</button>
                        <button className="bg-white text-black px-5 py-2 mx-1 my-2 text-sm w-1/6">categoria 2</button>
                        <button className="bg-white text-black px-5 py-2 mx-1 my-2 text-sm w-1/6">categoria 3</button>
                        <button className="bg-white text-black px-5 py-2 mx-1 my-2 text-sm w-1/6">categoria 4</button>
                        <button className="bg-white text-black px-5 py-2 mx-1 my-2 text-sm w-1/6">categoria 5</button>
                        <button className="bg-white text-black px-5 py-2 mx-1 my-2 text-sm w-1/6">categoria 6</button>
                    </div>
                    <div className="lg:w-full lg:flex">
                        <button className="bg-white text-black px-5 py-2 mx-1 my-2 text-sm w-1/6">categoria 7</button>
                        <button className="bg-white text-black px-5 py-2 mx-1 my-2 text-sm w-1/6">categoria 8</button>
                        <button className="bg-white text-black px-5 py-2 mx-1 my-2 text-sm w-1/6">categoria 9</button>
                        <button className="bg-white text-black px-5 py-2 mx-1 my-2 text-sm w-1/6">categoria 10</button>
                        <button className="bg-white text-black px-5 py-2 mx-1 my-2 text-sm w-1/6">categoria 11</button>
                        <button className="bg-white text-black px-5 py-2 mx-1 my-2 text-sm w-1/6">categoria 12</button>
                    </div>
                </div>
                <div className="lg:w-1/3">
                    <p> Buscá comercios </p>
                    <input 
                        type="text"
                        placeholder="almacenes, farmacias y mas..."
                        className="search-input p-2 w-full"
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        )
    }
}