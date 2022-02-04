import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Card from "./components/Card";

import Header from "./components/Header";
import Admin from "./components/Admin";

import "./CSS/app.css"

import { db } from "./firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  where,
  doc,
  updateDoc,
  deleteDoc,
  orderBy,
  query,
  limit,
} from "firebase/firestore";

function App() {
  // State
  const [pseudo] = useState(useParams().pseudo);
  const [recettes, setRecettes] = useState([]);

  // Gestion de l'affichage des cards
  const cards = recettes.map((recette) => {
    return <Card key={recette.id} pseudo={recette.pseudo} id={recette.id} details={recette.recette} deleteRecette={deleteRecette} updateRecette={modifyRecette} />;
  });

  const recettesCollectionRef = collection(db, "recettes");

  // Récupération des recettes dans la BDD
  useEffect(() => {
    const request = query(
      recettesCollectionRef,
      where("pseudo", "==", pseudo),
      orderBy("recette.nom", "asc"),
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
  async function modifyRecette(id, newRecette) {
    const updateDocRef = doc(db, "recettes", id);
    await updateDoc(updateDocRef, {
      "recette.nom": newRecette.nom,
      "recette.image": newRecette.image,
      "recette.ingredients": newRecette.ingredients,
      "recette.instructions": newRecette.instructions
    }).then(
      console.log("modification réussie")
    )
  }

  // Permet de supprimer une recette
  async function deleteRecette(id){
    await deleteDoc(doc(db, "recettes", id));
  }

  return (
    <div className="App">
      <Header pseudo={pseudo} />
      <div className="px-6 mt-16">
        <div className="cards">
          <div className="xl:columns-4 lg:columns-3 md:columns-2 xs:columns-1  space-y-2 ">
            {cards}
          </div>
        </div>
      </div>
      <div className="admin">
        <Admin addRecette={addRecette} />
      </div>
    </div>
  );
}

export default App;
