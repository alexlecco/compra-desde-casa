import React, { Component } from 'react';
import './App.css';

import StoresList from './components/StoresList';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import InfoCard from './components/InfoCard';

import palette from './constants/palette';
import text from './constants/text';

import infoCard1 from './assets/infoCard1.JPG';
import infoCard2 from './assets/infoCard2.JPG';

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
    console.log("text:::::::::::", text)

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

        <div className="flex lg:flex-no-wrap flex-wrap lg:justify-between lg:table-auto">
          <div className="lg:w-1/4 w-full lg:mr-1 mr-0 table-cell mb-3">
            <InfoCard
              title={"Información importante"}
              color={palette.color5}
              buttonText={"Más Información"}
              image={infoCard1}
            />
          </div>
          <div className="lg:w-1/4 w-full lg:ml-2 lg:mr-2 table-cell mb-3">
            <InfoCard
              title={"Si tu comercio hace delivery ¡sumalo!"}
              color={palette.color6}
              buttonText={"Sumar mi negocio"}
              text={text.largeText}
            />
          </div>
          <div className="lg:w-1/4 w-full lg:ml-1 lg:mr-2 table-cell mb-3">
            <InfoCard
              title={"Todos por el hospital"}
              color={palette.color7}
              buttonText={"Doná ahora"}
              image={infoCard2}
            />
          </div>
          <div className="lg:w-1/4 w-full lg:ml-1 table-cell mb-3">
            <InfoCard
              title={"Aislamiento social, preventivo y obligatorio"} 
              color={palette.color8}
              buttonText={"Conocé más sobre esta medida"}
              text={text.largeText}
            />
          </div>
        </div>
      </div>
    )
  }
}