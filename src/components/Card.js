import React from "react";

const Card = ({ details }) => {
  // Importation des instructions et des ingrédients sous forme de listes
  const ingredients = details.ingredients.split(';').map(item => <li key={item} className="my-2 mx-4 bg-gradient-to-br from-red-600  to-orange-400 text-white p-2 rounded  leading-none flex items-center">{item}</li> );
  const instructions = details.instructions.replaceAll("\\n", "\n").split(/\r?\n/).map(item => <li key={item} className="mx-4 my-4 pl-2">{item}</li>)

  // Systeme de gestion d'une image par default
  const requireImg = path => {
    try {
      return require(`../assets/img/${path}`)

    } catch (error) {
      return require(`../assets/img/default-img.jpg`)
    }
  };

  return (
    <div className="w-full card break-inside-avoid-column pb-6 ">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="image-box max-h-96 overflow-hidden">
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
          <ol className="list-decimal my-4 ">
            {instructions}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Card;
