import React from "react";

const Card = ({ details }) => {
  return (
    <div className="w-full card break-inside-avoid-column ">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="image-box max-h-96 overflow-hidden">
          <img
            src={require(`../assets/img/${details.image}`)}
            alt={details.nom}
            className="object-cover"
          />
        </div>
        <div className=" py-4 text-center">
          <h1 className="font-title text-3xl border-b-2 inline">
            {details.nom}
          </h1>
        </div>
        <div className="ingredient px-2 py-3  bg-gray-100 border-t-1 border-b-1">
          <h3 className="ml-4 inline border-b-2">Ingrédients :</h3>
          <ul className="flex flex-wrap justify-around mt-3 pl-4 list-disc">
            {details.ingredients}
            {/* <li className="mx-8">2 Citrons</li>
                            <li className="mx-8">1 Mangue</li>
                            <li className="mx-8">4 Oranges</li>
                            <li className="mx-8">Curcuma</li>
                            <li className="mx-8">Gingembre</li>
                            <li className="mx-8">Poivre</li> */}
          </ul>
        </div>
        <div className="task pr-8 pl-12 py-2">
          <h3 className="inline border-b-2">Instructions :</h3>
          <ol className="list-decimal mt-4 ">
            {details.instructions}
            {/* <li className="my-2">Faire chauffer la poele</li>
                            <li className="my-2">Eplucher les oranges</li>
                            <li className="my-2">Presser un citron, dans un verre</li>
                            <li className="my-2">Presser la moitié d'une mangue</li>
                            <li className="my-2">Ajouter, une pincée de poivre, 2 pincée de gingembre, une pincée de curcuma</li>
                            <li className="my-2">Presser le restant des fruits et mélanger</li> */}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Card;
