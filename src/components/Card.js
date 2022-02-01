import React from "react";

const Card = ({ details, openModal }) => {
  // Importation des instructions et des ingrédients sous forme de listes
  const ingredients = details.ingredients.split(';').map(item => <li key={item} className="my-2 mx-4 bg-gradient-to-br from-red-600  to-orange-400 text-white p-2 rounded  leading-none flex items-center">{item}</li>);
  const instructions = details.instructions.replaceAll("\\n", "\n").split(/\r?\n/).map(item => <li key={item} className="mx-4 my-4 pl-2">{item}</li>)


  const handleClickModal = event => {
    event.preventDefault()
    openModal(true);
  }

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
        <div className="image-box max-h-96 overflow-hidden relative">
          <button type="button" className="modify-box w-10 drop-shadow absolute right-0 mr-2 mt-2" onClick={handleClickModal} >
            <svg className="svg-icon drop-shadow cursor-pointer hover:fill-red-500 fill-white" viewBox="0 0 20 20">
              <path d="M10,2.172c-4.324,0-7.828,3.504-7.828,7.828S5.676,17.828,10,17.828c4.324,0,7.828-3.504,7.828-7.828S14.324,2.172,10,2.172M10,17.004c-3.863,0-7.004-3.141-7.004-7.003S6.137,2.997,10,2.997c3.862,0,7.004,3.141,7.004,7.004S13.862,17.004,10,17.004M10,8.559c-0.795,0-1.442,0.646-1.442,1.442S9.205,11.443,10,11.443s1.441-0.647,1.441-1.443S10.795,8.559,10,8.559 M10,10.619c-0.34,0-0.618-0.278-0.618-0.618S9.66,9.382,10,9.382S10.618,9.661,10.618,10S10.34,10.619,10,10.619 M14.12,8.559c-0.795,0-1.442,0.646-1.442,1.442s0.647,1.443,1.442,1.443s1.442-0.647,1.442-1.443S14.915,8.559,14.12,8.559 M14.12,10.619c-0.34,0-0.618-0.278-0.618-0.618s0.278-0.618,0.618-0.618S14.738,9.661,14.738,10S14.46,10.619,14.12,10.619 M5.88,8.559c-0.795,0-1.442,0.646-1.442,1.442s0.646,1.443,1.442,1.443S7.322,10.796,7.322,10S6.675,8.559,5.88,8.559 M5.88,10.619c-0.34,0-0.618-0.278-0.618-0.618S5.54,9.382,5.88,9.382S6.498,9.661,6.498,10S6.22,10.619,5.88,10.619"></path>
            </svg>
          </button>
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
