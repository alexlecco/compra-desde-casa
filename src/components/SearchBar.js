import React, { Component } from 'react';

const EmptyState = () => <div> Sin resultados </div>

const Results = (props) => {
    if(props.number === 0) return <EmptyState />
  
    const resultText = props.number === 1 ? 'resultado' : 'resultados'  
    return (props.filteredStores !== props.stores || props.term.length > 2) ?
      (<div> {props.number} {resultText} </div>)
      :
      (<div />)
}

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
        const { term, number, stores, filteredStores } = this.props;
        const buttonClassName = "bg-white text-black px-5 py-2 mx-1 my-2 text-sm w-1/6";

        return (
            <div className="md:p-2 lg:flex">
                <div className="lg:w-2/3">
                    <div className="lg:w-full lg:flex">
                        <button className={buttonClassName}>Almacen</button>
                        <button className={buttonClassName}>Carnicería</button>
                        <button className={buttonClassName}>Comida</button>
                        <button className={buttonClassName}>Farmacia</button>
                        <button className={buttonClassName}>Ferretería</button>
                        <button className={buttonClassName}>Forrajería</button>
                    </div>
                    <div className="lg:w-full lg:flex">
                        <button className={buttonClassName}>Heladería</button>
                        <button className={buttonClassName}>Panadería</button>
                        <button className={buttonClassName}>Pollería</button>
                        <button className={buttonClassName}>Sandwichería</button>
                        <button className={buttonClassName}>Verdulería</button>
                        <button className={buttonClassName}>Otros</button>
                    </div>
                </div>
                <div className="lg:w-1/3 lg:mx-5">
                    <p> Buscá comercios </p>
                    <input 
                        type="text"
                        placeholder="almacenes, farmacias y mas..."
                        className="search-input p-2 w-full"
                        onChange={this.handleChange}
                    />
                    <Results
                        filteredStores={filteredStores}
                        stores={stores}
                        number={number}
                        term={term}
                    />
                </div>
            </div>
        )
    }
}