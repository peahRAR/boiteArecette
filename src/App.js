import React, { useState, Component } from "react";
import { useParams } from 'react-router'

function App() {

  const [pseudo] =  useState(useParams().pseudo)
  

    return (
      <div className="App">
        <h1>Les recettes du Chef {pseudo}</h1>
        <div className="cards">
          <div className="card">
            <h2>Recette n°1</h2>
          </div>
        </div>
      </div>
    );
  }


export default App;
