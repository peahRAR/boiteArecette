import React, {useState} from "react";

function Modal({ setModal, nom, image, ingredients, instructions, updateRecette }) {
  const [recette, setRecette] = useState({nom , image , ingredients, instructions})
  
    const handleClose = () => {
    setModal(false);
    document.body.classList.remove("modal-open");
  };

  const handleSubmit = () => {
    console.log("click submit");
    updateRecette();
  };

  const handleChange = (event) => {
    let copyRecette = {...recette}
    console.log(copyRecette)
    const {name , value} = event.target
    copyRecette[name] = value
    console.log(copyRecette)

    setRecette({copyRecette})
  };

  return (
    <div className="z-50 absolute top-0 bottom-0 left-0 right-0">
      <div
        onClick={handleClose}
        className="fixed py-12 h-full bg-gradient-to-br from-red-600  to-orange-400 opacity-60 transition duration-150 ease-in-out z-10 top-0 right-0 bottom-0 left-0"
        id="modal"
      ></div>
      <div
        role="alert"
        className="container w-full flex m-auto absolute top-0 bottom-0 left-0 right-0"
      >
        <div className="md:w-2/3 lg:w-3/5 h-2/3 z-50 py-8 px-5 md:px-10 fixed m-auto bg-white shadow-md rounded border border-gray-400 top-0 left-0 right-0 bottom-0">
          <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
            Modifier votre recette
          </h1>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="nom"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Nom
            </label>
            <input
              name="nom"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-red-600 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              value={recette.nom}
              onChange={handleChange}
            />
            <label
              htmlFor="image"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Image
            </label>
            <div className="relative mb-5 mt-2">
              <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                <svg
                  viewBox="0 0 64 64"
                  aria-labelledby="title"
                  aria-describedby="desc"
                  role="img"
                  className="w-5"
                >
                  <title>Image</title>
                  <desc>A line styled icon from Orion Icon Library.</desc>
                  <circle
                    data-name="layer2"
                    cx="17"
                    cy="15"
                    r="5"
                    fill="none"
                    stroke="#202020"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></circle>
                  <path
                    data-name="layer2"
                    d="M8 46c0-2.8 6.6-16 13.3-16s6.1 6 8.7 6 4.6-18 12-18 14 25.8 14 28"
                    fill="none"
                    stroke="#202020"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                  <path
                    data-name="layer1"
                    fill="none"
                    stroke="#202020"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M2 46h60M2 2h60v60H2z"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
              <input
                name="image"
                className="text-gray-600 focus:outline-none focus:border focus:border-red-600 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"
                value={image}
                onChange={handleChange}
              />
            </div>
            <label
              htmlFor="ingredients"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Ingrédients
            </label>
            <div className="relative mb-5 mt-2">
              <div className="absolute right-0 border-l-2 text-gray-600 flex items-center pl-4  pr-6 h-full cursor-default">
                <svg
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="title"
                  aria-describedby="desc"
                  role="img"
                  height="20"
                  width="20"
                >
                  <title>Salt Shaker</title>
                  <path
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    stroke="#202020"
                    fill="none"
                    d="M38 26.6s0-8.4-4.2-12.7l-8.6-8.5C19.8 0 12.3 1.4 6.9 6.9 1.4 12.3 0 19.8 5.4 25.2l8.5 8.5C18.2 38 26.6 38 26.6 38"
                    data-name="layer2"
                  ></path>
                  <path
                    d="M25.264 39.336l14.142-14.143 7.07 7.071-14.141 14.143zM50.7 39.4l1.4 1.4m-5.6 5.7l4.2 4.2m-11.3 0l4.2 4.2m14.2-8.4l4.2 4.2m-5.6 5.7l1.4 1.4m-9.9 1.4l2.8 2.8"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    stroke="#202020"
                    fill="none"
                    data-name="layer1"
                  ></path>
                </svg>
              </div>
              <textarea
                name="ingredients"
                className="text-gray-600 border-r-2 focus:outline-none focus:border resize-none focus:border-red-600 font-normal w-full h-10 flex items-center pl-3 pr-12 text-sm border-gray-300 rounded border"
                value={ingredients}
                onChange={handleChange}
              ></textarea>
            </div>
            <label
              htmlFor="instructions"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Instructions
            </label>
            <div className="relative mb-5 mt-2">
              <textarea
                name="instructions"
                type="text"
                rows="5"
                className="mb-8  text-gray-600 focus:outline-none resize-none focus:border focus:border-red-600 outline-border-red-600 font-normal w-full flex items-center pl-3 text-sm border-gray-300 rounded border"
                value={instructions}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex items-center justify-start w-full">
              <button
                type="submit"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-br from-red-600  to-orange-400 focus:ring-red-600 transition duration-150 ease-in-out hover:bg-gradient-to-br hover:from-red-600  hover:to-orange-600  rounded text-white px-8 py-2 text-sm"
              >
                Modifier
              </button>
              <button
                onClick={handleClose}
                className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
              >
                Annuler
              </button>
            </div>
            <button
              onClick={handleClose}
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-red-600"
              aria-label="close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-x"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
