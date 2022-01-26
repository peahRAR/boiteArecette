import React from "react";

const NotFound = () => (
  <div className="flex w-full h-screen justify-center align-center">
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16 my-auto">
      <div className="w-full xl:w-1/2 relative">
        <div className="relative">
          <div className="absolute flex  h-full">
            <div className="my-auto">
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                Looks like you've found the doorway to the great nothing
              </h1>
              <p className="my-2 text-gray-800">
                Sorry about that! Please visit our hompage to get where you need
                to go.
              </p>
            </div>
          </div>
          <div>
            <img alt="erreur 404"  src="https://i.ibb.co/G9DC8S0/404-2.png" />
          </div>
        </div>
      </div>
      <div>
        <img alt="prise electrique débranché" src="https://i.ibb.co/ck1SGFJ/Group.png" />
      </div>
    </div>
  </div>
);

export default NotFound;
