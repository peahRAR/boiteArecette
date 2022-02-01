import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Card from "./components/Card";

import Header from "./components/Header";
import Admin from "./components/Admin";
import Modal from "./components/Modal";

import { db } from "./firebase";
import {
  addDoc,
  setDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  limit,
} from "firebase/firestore";

function App() {
  // State
  const [pseudo] = useState(useParams().pseudo);
  const [recettes, setRecettes] = useState([]);

  // Valeur de la modal
  const [modal, setModal] = useState(false);

  // Gestion de l'affichage des cards
  const cards = recettes.map((recette) => {
    return <Card key={recette.id} details={recette.recette} openModal={setModal} />;
  });

  const recettesCollectionRef = collection(db, "recettes");

  // Récupération des recettes dans la BDD
  useEffect(() => {
    const request = query(
      recettesCollectionRef,
      orderBy("recette.nom", "desc"),
      limit(25)
    );
    onSnapshot(request, (snapshot) => {
      setRecettes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  // Permet d'ajouter une recette à la BDD
  async function addRecette(recette) {
    await addDoc(recettesCollectionRef, {
      recette: recette,
      pseudo: pseudo,
    });
  }

  // Permet de modifier une recette
  async function modifyRecette(key, newRecette) {
    const recettes = { ...this.state.recette }
    recettes[key] = newRecette
    await setDoc(recettesCollectionRef, {
      recette: newRecette,
      pseudo: pseudo,
    });
  }

  return (
    <div className="App">
      <Header pseudo={pseudo} />
      <div className="px-6 py-4 mt-16">
        <div className="cards">
          <div className="xl:columns-4 lg:columns-3 md:columns-2 xs:columns-1  space-y-6 ">
            {cards}
          </div>
        </div>
      </div>
      {modal ? <Modal setModal={setModal}/> : null}
      <div className="admin">
        <Admin addRecette={addRecette} />
      </div>
    </div>
  );
}

export default App;
