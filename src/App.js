import React, { Component } from 'react';
import './App.css';
import StoresList from './components/StoresList';
import SearchBar from './components/SearchBar';
import data from './data.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [...data],
      filteredStores: [...data],
      term: ''
    }
    this.updateList = this.updateList.bind(this)
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
    const { filteredStores, stores } = this.state;
    const updateList = this.updateList.bind(this);

    return (
      <div className="App md:p-20 p-5">
        <SearchBar updateList={updateList} stores={stores}/>
        <StoresList stores={filteredStores} />
      </div>
    );
  }
}