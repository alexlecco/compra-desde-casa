import React from 'react';
import './App.css';
import StoresList from './components/StoresList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Buscá comercios</p>
        <input type="text"/>
        
        <StoresList />
      </header>
    </div>
  );
}

export default App;
