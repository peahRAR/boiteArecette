import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ details, pseudo, updateRecette, id, deleteRecette }) => {
  // Importation des instructions et des ingrédients sous forme de listes
  const ingredients = details.ingredients.split(";").map((item) => (
    <li
      key={item}
      className="my-2 mx-4 bg-gradient-to-br from-red-600  to-orange-400 text-white p-2 rounded  leading-none flex items-center text-center"
    >
      {item}
    </li>
  ));
  const instructions = details.instructions
    .replaceAll("\\n", "\n")
    .split(/\r?\n/)
    .map((item) => (
      <li key={item} className="mx-4 my-4 pl-2">
        {item}
      </li>
    ));

  // Valeur de la modal
  const [modal, setModal] = useState(false);

  const handleClickModal = (event) => {
    event.preventDefault();
    setModal(true);
    document.body.classList.add("modal-open");
  };

  const handleDelete = () => {
    let text = "Etes vous sur de vouloir supprimer ?";
    if (window.confirm(text) === true) {
      deleteRecette(id)
    } 
    return
  };

  // Systeme de gestion d'une image par default
  const requireImg = (path) => {
    try {
      return require(`../assets/img/${path}`);
    } catch (error) {
      return require(`../assets/img/default-img.jpg`);
    }
  };

  return (
    <div className="w-full card break-inside-avoid-column py-2 ">
      {modal ? (
        <Modal
          setModal={setModal}
          {...details}
          pseudo={pseudo}
          id={id}
          updateRecette={updateRecette}
        />
      ) : null}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="image-box max-h-96 overflow-hidden relative">
          <div className="admin-box bg-white absolute top-0 right-0 rounded-bl-lg flex">
            <button
              type="button"
              className="modify-box w-5 ml-2 drop-shadow right-0 mr-2"
              onClick={handleClickModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                aria-labelledby="title"
                aria-describedby="desc"
                role="img"
                className="stroke-gray-800 hover:stroke-red-500"
              >
                <title>Modifier</title>
                <desc>A line styled icon from Orion Icon Library.</desc>
                <circle
                  data-name="layer3"
                  cx="8"
                  cy="32"
                  r="6"
                  fill="none"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></circle>
                <circle
                  data-name="layer2"
                  cx="56"
                  cy="32"
                  r="6"
                  fill="none"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></circle>
                <circle
                  data-name="layer1"
                  cx="32"
                  cy="32"
                  r="6"
                  fill="none"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></circle>
              </svg>
            </button>

            <button
              type="button"
              className="delete-box w-8 right-0"
              onClick={handleDelete}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                aria-labelledby="title"
                aria-describedby="desc"
                role="img"
                className=" stroke-gray-800 hover:stroke-red-500"
              >
                <title>Delete</title>
                <desc>A line styled icon from Orion Icon Library.</desc>
                <path
                  data-name="layer1"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="M41.999 20.002l-22 22m22 0L20 20"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </button>
          </div>

          <img
            src={requireImg(details.image)}
            alt={details.nom}
            className="object-cover"
          />
        </div>
        <div className=" py-4 text-center">
          <h1 className="font-title text-3xl border-b-2 inline mx-auto text-center">
            {details.nom}
          </h1>
        </div>
        <div className="ingredient px-2 py-3  bg-gray-100 border-t-1 border-b-1">
          <h3 className="ml-4 inline border-b-2">Ingrédients :</h3>
          <ul className="flex flex-wrap justify-around mt-3 pl-4">
            {ingredients}
          </ul>
        </div>
        <div className="task pr-4 pl-6 py-2">
          <h3 className="inline border-b-2">Instructions :</h3>
          <ol className="list-decimal my-4 ">{instructions}</ol>
        </div>
      </div>
    </div>
  );
};

export default Card;
