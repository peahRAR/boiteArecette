import React, { Component } from "react";
import HeroForm from "../assets/img/hero_form.jpg";

export default class AddRecette extends Component {
  state = {
    nom: "",
    image: "",
    ingredients: "",
    instructions: "",
  };

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault();
    const recette = { ...this.state }
    this.props.addRecette(recette)

    //Reset des champs de saisie
    Object.keys(recette).forEach(item => {
      recette[item] = ''
    })
    this.setState({ ...recette })
  }


  render() {
    return (
      <div className="w-full">
        <div className="overlay overflow-hidden relative">
          <img src={HeroForm} alt="Famille qui prépare à manger" className="absolute top-0 left-0 right-0" />
          <div className="bg-gradient-to-br opacity-40 from-red-600  to-orange-400 h-96"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12 absolute m-auto left-0 right-0">
          <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72 mb-12">
            <p className="text-3xl font-bold leading-7 text-center">
              Ajouter une recette
            </p>
            <form onSubmit={this.handleSubmit}>
              <div className="md:flex items-center mt-12">
                <div className="w-full md:w-1/2 flex flex-col">
                  <label className="font-semibold leading-none">
                    Nom du plat
                  </label>
                  <input
                    required
                    value={this.state.nom}
                    onChange={this.handleChange}
                    name="nom"
                    type="text"
                    className="leading-none text-gray-900 p-3 focus:outline-none focus:border-red-700 mt-4 bg-gray-100 border rounded border-gray-200"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="font-semibold leading-none">Image</label>
                  <input
                    value={this.state.image}
                    onChange={this.handleChange}
                    name="image"
                    type="text"
                    className="leading-none text-gray-900 p-3 focus:outline-none focus:border-red-700 mt-4 bg-gray-100 border rounded border-gray-200"
                  />
                </div>
              </div>
              <div className="md:flex items-center mt-8">
                <div className="w-full flex flex-col">
                  <label className="font-semibold leading-none">
                    Ingrédients
                  </label>
                  <textarea
                    required
                    value={this.state.ingredients}
                    onChange={this.handleChange}
                    name="ingredients"
                    rows="2"
                    type="text"
                    className="resize-none leading-none text-gray-900 p-3 focus:outline-none focus:border-red-700 mt-4 bg-gray-100 border rounded border-gray-200"
                  ></textarea>
                </div>
              </div>
              <div>
                <div className="w-full flex flex-col mt-8">
                  <label className="font-semibold leading-none">
                    Instructions
                  </label>
                  <textarea
                    required
                    value={this.state.instructions}
                    onChange={this.handleChange}
                    name="instructions"
                    type="text"
                    className="resize-none h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:outline-red-700  focus:border-red-700 mt-4 bg-gray-100 border rounded border-gray-200"
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <button type="submit" className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-gradient-to-br from-red-600  to-orange-400 hover:bg-gradient-to-br hover:from-red-600  hover:to-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-700 focus:outline-none">
                  Ajouter ma recette
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
