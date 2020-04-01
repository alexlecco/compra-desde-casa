import React from 'react';
import './App.css';
import StoresList from './components/StoresList';
import stores from './data.json';

const SearchBar = () =>
  <div className="md:p-2">
    <p> Buscá comercios</p>
    <input type="text" placeholder="almacenes, farmacias y mas..." className="search-input p-2 w-full" />
  </div>

const Rectangle = () =>
  <div class="flex flex-wrap">
    <div class="w-1/3 bg-gray-400 h-12"></div>
    <div class="w-1/3 bg-gray-500 h-12"></div>
    <div class="w-1/3 bg-gray-400 h-12"></div>
    <div class="w-1/3 bg-gray-500 h-12"></div>
    <div class="w-1/3 bg-gray-400 h-12"></div>
  </div>

function App() {
  return (
    <div className="App md:p-20 p-5">
      <SearchBar />
      <StoresList stores={stores} />
    </div>
  );
}

export default App;
