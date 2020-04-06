import React, { Component } from 'react';
import './App.css';
import StoresList from './components/StoresList';
import SearchBar from './components/SearchBar';

const EmptyState = () => <div> Sin resultados </div>

const Results = (props) => {
  if(props.number === 0) return <EmptyState />

  const resultText = props.number === 1 ? 'resultado' : 'resultados'  
  return (props.filteredStores !== props.stores || props.term.length > 2) ?
    (<div> {props.number} {resultText} </div>)
    :
    (<div />)
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      filteredStores: [],
      term: ''
    }
    this.updateList = this.updateList.bind(this)
  }

  componentDidMount() {
    const req = 'http://167.99.228.107/api/stores';

    fetch(req)
      .then(res => res.json())
      .then(data => this.setState({ stores: [...data], filteredStores: [...data] }));
  }

  updateList(newList, term) {
    const { stores } = this.state;
    term !== '' ?
      this.setState({
        filteredStores: newList,
        term
      }) : 
      this.setState({filteredStores: stores})
  }

  render() {
    const { filteredStores, stores, term } = this.state;
    const updateList = this.updateList.bind(this);

    return (
      <div className="App md:p-20 p-5">
        <SearchBar updateList={updateList} stores={stores}/>
        
        <Results
          filteredStores={filteredStores.length}
          stores={stores.length}
          number={filteredStores.length}
          term={term}
        />
        
        <StoresList stores={filteredStores} />
      </div>
    )
  }
}