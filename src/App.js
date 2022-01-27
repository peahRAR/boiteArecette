import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import Card from './components/Card';

import Header from './components/Header'
import { db } from "./firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  limit
} from "firebase/firestore";


function App() {

  // State
  const [pseudo] = useState(useParams().pseudo)
  const [recettes, setRecettes] = useState([])

  const cards = recettes.map( recette => {return( <Card key={recette.id} details={recette} />)})
 

  const recettesCollectionRef = collection(db, "recettes");

  // Récupération des recettes dans la BDD
  useEffect(() => {
    const request = query(recettesCollectionRef, orderBy("nom", "desc"), limit(25));
    onSnapshot(request, (snapshot) => {
      setRecettes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

  }, []);

  return (
    <div className="App">
      <Header pseudo={pseudo} />
      <div className="container px-6 py-4">
        <div className="cards">
          <div className="flex flex-wrap">
           {cards}
          </div>
        </div>
      </div>
    </div >
  );
}


export default App;
