import React from 'react';
import './App.css';
import StoresList from './components/StoresList';
import stores from './data.json'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Buscá comercios</p>
        <input type="text"/>
        
        <StoresList stores={stores} />
      </header>
    </div>
  );
}

export default App;
