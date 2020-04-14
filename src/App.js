import React, { Component } from 'react';
import './App.css';
import StoresList from './components/StoresList';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

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
        <div className="container">
          <Header />
        </div>

        <div className="container">
          <SearchBar
            updateList={updateList}
            stores={stores}
            filteredStores={filteredStores}
            number={filteredStores.length}
            term={term}
          />    
          <StoresList stores={filteredStores} />
        </div>
      </div>
    )
  }
}