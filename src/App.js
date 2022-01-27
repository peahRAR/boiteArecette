import React, { useState, Component } from "react";
import { useParams } from 'react-router';
import Card from './components/Card';

import Header from './components/Header'

function App() {

  const [pseudo] = useState(useParams().pseudo)
  //const [recettes] = {Consummer firestore}

  //const cards = Object.keys(recettes).map( key=[key] => <Card details=recettes[key] />)

  return (
    <div className="App">
      <Header pseudo={pseudo} />
      <div className="container px-6 py-4">
        <div className="cards">
          <div className="flex flex-wrap">
            <Card/>
          </div>
        </div>
      </div>
    </div >
  );
}


export default App;
