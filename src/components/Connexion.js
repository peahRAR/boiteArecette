import React, { Component } from "react";
import { Navigate } from "react-router-dom";

import imgHome from "../assets/img/Salt_ConnexionComp.jpg";

class Connexion extends Component {
  state = {
    pseudo: "",
    goToApp: false,
  };

  goToApp = (event) => {
    event.preventDefault();
    this.setState({ goToApp: true });
  };

  handleChange = (event) => {
    const pseudo = event.target.value;
    this.setState({ pseudo });
  };

  render() {
    if (this.state.goToApp) {
      return <Navigate to={`/pseudo/${this.state.pseudo}`} />;
    }

    return (
      <section>
        <div className="h-screen flex max-h-screen">
          <div className="md:flex w-full hidden  i justify-around items-center">
            <div className="max-h-screen overflow-hidden relative">
              <div className="overlay bg-gradient-to-br from-red-600  to-orange-400 absolute h-screen w-full opacity-40 "></div>
              <img className="object-cover min-h-screen" alt="main qui sale un plat" src={imgHome}></img>
            </div>
          </div>
          <div className="flex w-full justify-center items-center bg-white">
            <form className="bg-white text-center" onSubmit={this.goToApp}>
              <h1 className="text-gray-800 font-bold text-2xl mb-1">
                Ma boîte à recettes
              </h1>
              <p className="text-sm font-normal text-gray-600 mb-7">
                Connexion :
              </p>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20">
                  <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                </svg>
                <input
                  className="pl-2 outline-none border-none"
                  type="text"
                  value={this.state.pseudo}
                  onChange={this.handleChange}
                  placeholder="Nom du chef *"
                  pattern= '[A-Za-z]{1,}'
                  required
                />
              </div>
              <button
                type="submit"
                className="block w-full bg-gradient-to-br from-red-600  to-orange-400 hover:bg-gradient-to-br hover:from-red-700 hover:to-orange-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              >
                Login
              </button>
              <span className="text-sm ml-2">
                *Pas de caractères spéciaux.
              </span>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Connexion;
